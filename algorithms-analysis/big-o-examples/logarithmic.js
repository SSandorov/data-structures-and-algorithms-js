/*
*   Represented as O(log n). It means that as the input size grows,
*   the numbers of operations grows very slowly.
*/

/**
 * @summary
 * Recursive binary search. The binary search implementation is a recursive algorithm,
 * which means that the function calls itself multiple times until the
 * program finds a solution. The binary search splits the array in half every time
 * 
 * @description This function uses a recursive approach to find an element 
 * in a sorted array. It splits the array in half and compares the middle
 * element with the search value. If the middle element is the search value,
 * it returns the index of the element. If the middle element is less than
 * the search value, it recursively calls the function with the right half
 * of the array. If the middle element is greater than the search value, it
 * recursively calls the function with the left half of the array.
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