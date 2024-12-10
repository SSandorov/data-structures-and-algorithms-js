/*
*   Factorial runtime: O(n!), is not scalable and should be avoided. Even for small inputs
*   (around 10 elements), it will take a long time to compute.
*/
//* A classical example of an O(n!) algorithm is finding all the different words formed with
//* a given set of letters.

/**
 * Find all the diferent permutations a word can have
 * Runtime: O(n!)
 * 
 * @example
 *     getPermutations('a'); // ['a']
 *     getPermutations('ab'); // ['ab', 'ba']
 *     getPermutations('abc'); // ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']
 * @param {string} word string or array of chars to permute
 * @param {string} prefix used internally for recursion
 * @returns {array} collection of all the ways the letters can be arranged 
 */
export function getPermutations(word = '', prefix = '') {
    if (word.length <= 1) {
        return [prefix + word];
    }

    return Array.from(word).reduce((result, char, index) => {
        const reminder = word.slice(0, index) + word.slice(index + 1);
        return result.concat(getPermutations(reminder, prefix + char));
    }, []);
}