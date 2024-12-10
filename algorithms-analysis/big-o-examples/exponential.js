/*
*   Exponential runtimes: O(2^n) mean that the runtime doubles with each additional input.
*   Exponential programs are only usable for small inputs (< 100), otherwise, it 
*   might take years to run.
*/

/**
 * Finds all distinct subsets of a given set
 * Runtime: O(2^n)
 * 
 * @example
 *     findSubsets('a'); // => [ '', 'a' ]
 *     findSubsets([1, 'b']); // => [ '', '1', 'b', '1b' ]
 *    findSubsets('abc'); // => [ '', 'a', 'b', 'ab', 'c', 'ac', 'bc', 'abc' ]
 * 
 * @param {string | array} n
 * @returns {array} all the subsets (including empty and set itself)
 */
export function findSubsets(n = '') {
    const array = Array.from(n);
    const base = ['']; // base case is empty element
    const results = array.reduce((previous, element) => {
        const previousPlusElement = previous.map((el) => `${el}${element}`); // for each element from the input, append it to the results array
        return previous.concat(previousPlusElement); // the new results array will be what it was before plus the duplicated with the appended element
    }, base);
    return results;
}