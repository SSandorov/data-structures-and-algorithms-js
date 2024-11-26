/*
*   Represented as O(log n). It means that as the input size grows,
*   the numbers of operations grows very slowly.
*/

/**
 * @name Recursive binary search
 * @description The binary search implementation is a recursive algorithm,
 * which means that the function calls itself multiple times until the
 * program finds a solution. The binary search splits the array in half every time
 * 
 * @example
 * binarySearch([1, 2, 3], 2); // 1
 * binarySearch([1, 2, 3], 31); // -1
 * @param {Array} array collection of sorted elements
 * @param {String | Number} search value to search for
 * @param {Number} offset keep track of array's original index
 * @returns index of the found element or -1 if not found
 */
export function binarySearchRecursive(array, search, offset = 0) {
    // split array in half
    const half = parseInt(array.length / 2, 10);
    const current = array[half];

    if (current === search) {
        return half + offset;
    }

    if (array.length === 1) {
        return -1;
    }

    if (current < search) {
        const right = array.slice(half);
        return binarySearchRecursive(right, search, offset + half);
    }

    const left = array.slice(0, half);
    return binarySearchRecursive(left, search, offset);
}