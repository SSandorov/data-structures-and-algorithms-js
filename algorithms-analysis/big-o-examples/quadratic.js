/*
*   Quadratic Time Complexity
*   O(n^2)

*   They are the ones to watch ut for. They usually don't scale well when they have a 
*   large amount of data to process. 

*   Usually, they have double nested loops, where each one visits all or most elements
*   in the input. One example is a naive implementationto find duplicate words on an array
*/

//* We already solved this problem in the linear example, but let's see how it would 
//* look like with a quadratic time complexity

/**
 * Finds out if an array has duplicates
 * Runs in O(n^2) time complexity
 * @example
 * hasDuplicates([]); // false
 * hasDuplicates([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // false
 * hasDuplicates([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1]); // true
 * @param {Array} arr - The array to check for duplicates
 * @returns {Boolean} - True if there are duplicates, false otherwise
 */
export function hasDuplicates(array) {
    for (let outter = 0; outter < array.length; outter++) {
        for (let inner = outter + 1; inner < array.length; inner++) {
            if (array[outter] === array[inner]) {
                return true;
            }
        }
        return false;
    }
}