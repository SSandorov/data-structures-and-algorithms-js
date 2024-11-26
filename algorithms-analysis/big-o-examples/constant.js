/* 
 *  Represented as O(1). Means that the algorithm will always take the same 
 *  amount of time to execute, regardless of the input size.
*/

/**
 * Return true if an array is empty and false otherwise
 * @param {Array | String}
 * @example
 * isEmpty() // true
 * isEmpty([]) // true
 * isEmpty('') // true
 * isEmpty([1, 2, 3]) // false
 * isEmpty('hello') // false
 */
export function isEmpty(element) {
  return !element || element.length < 1;
}

/*
*   Either if the input is a collection of 10 or 10M elements, it would take 
*   the same amount of time to execute
*/