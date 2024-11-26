//* Represented by O(n). An algorithm has a linear running time 
//* when it visits every input element a fixed number of times.

/**
 * @summary Finds out if an array has duplicates | O(n)
 * 
 * @description
 * This function uses a Map to store the elements of the array
 * and check if the element is already in the Map. If it is,
 * it returns true, otherwise it adds the element to the Map.
 * 
 * @example
 * hasDuplicates([]); // false
 * hasDuplicates([1, 2, 3, 4, 5]); // false
 * hasDuplicates([1, 2, 3, 4, 5, 1]); // true
 * @param {Array} array
 * @returns {Boolean} true if it has duplicates, false otherwise
 */
export function hasDuplicates(array) {
    const words = new Map();
    for (let i = 0; i < array.length; i++) {
        const word = array[i];
        if (words.has(word)) {
            return true;
        }
        words.set(word, true);
    }
    return false;
}