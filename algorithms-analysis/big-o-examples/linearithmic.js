/*
*   Linearithmic time complexity - O(n log n)

*   An algorithm has a linearithmic time complexity when it has a linear time complexity
*   inside a loop that runs log n times. This is common in algorithms that divide the
*   problem in half each iteration, like merge sort or binary search.

*   This one is the best runtime for sorting algorithms, as it is the fastest one.
*/

//* Merge Sort
//* The merge sort has two main functions: the merge and the sort

//* Sort function
/**
 * Split the array in half recursively until two or less elements are left.
 * Sort these two elements and combine them back using the merge function.
 * @param {Array} array
 * @example
 *     splitSort([3, 2, 1]) => [1, 2, 3]
 *     splitSort([3]) => [3]
 *    splitSort([3, 2]) => [2, 3]
*/
export function splitSort(array) {
    const size = array.length;

    // base case
    if (size < 2) {
        return array;
    }
    if (size === 2) {
        return array[0] > array[1] ? [array[1], array[0]] : array; //* if the array only has two elements, we can sort them manually
    }

    // recursive split in half and merge back
    const half = Math.ceil(size / 2);
    return merge( //* merge the two parts recursively with merge function
        splitSort(array.slice(0, half)), //* we devide the array into two halves
        splitSort(array.slice(half)),   //* we devide the array into two halves
    );
}

//* Merge function

/**
 * Merge two arrays in ascending order
 * 
 * @param {Array} array1 sorted array1
 * @param {Array} array2 sorted array2
 * @returns {Array} merged arrays in ascending order
 * 
 * @example
 *    merge([1, 3], [2, 4]) => [1, 2, 3, 4]
*/
function merge(array1, array2 = []) {
    const mergedLength = array1.length + array2.length;
    const mergedArray = Array(mergedLength);

    // merge elements on a and b in asc order. Runtime O(a + b)
    for (let index = 0, i1 =0, i2 = 0; index < mergedLength; index++) { //* we iterate over the two arrays and add the smallest element to the merged array each time we iterate over the two arrays
        if (i2 >= array2.length || (i1 < array1.length && array1[i1] <= array2[i2])) {
            mergedArray[index] = array1[i1]; //* we add the smallest element to the merged array and increment the index of the array we took the element from
            i1 += 1;
        } else {
            mergedArray[index] = array2[i2]; //* we add the smallest element to the merged array and increment the index of the array we took the element from
            i2 += 1;
        }
    }

    return mergedArray;
}
