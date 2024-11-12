
/**
 *  Get the smallest number on an array of numbers
 * @param {Array} array array of numbers
 * @example
 *  getMin([3, 2, 9]) => 2
 */
export function getMin(array) {
    let min; // 1 operation
    for (let index = 0; index < array.length; index++) { // 1 operation
        const element = array[index];                   //
                                                        //
        if ( min === undefined || element < min ) {     //
            min = element;                              // 3 operation * n times
        }
    }
    return min; // 1 operation
}

//* Time complexity is 3n + 3
//* But as the input size n becomes bigger the constant part of the equation
//* influences less and less

//* That is why the Big O notation takes into account ONLY the order of the function
//* in the worst case scenario

//* Expressed in Big O notation as O(3n) leaving 3 out of the equation

//! THE BIG O NOTATION NEVER DROPS MULTIPLICATIONS
