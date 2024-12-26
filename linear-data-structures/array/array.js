//* Array patterns for solving interview questions

//* Two Pointers Pattern

//* Usually, we use one pointer to navigate each element in an array. However,
//* there are times when having two pointers (left/right, low/high) comes in handy.

//* 1. Given a sorted array of integers, find two numbers that add up to a target
//* and return their values.

/**
 * Find two numbers that add up target
 * @param arr - The array of integers
 * @param target - The target
 * @returns {number[]} - array with the values that add up to target
 * twoSum([ -5, -3, 1, 10 ], 7); // [-3, 10] // (10 - 3 = 7)
 * twoSum([ -5, -3, -1, 1, 2 ], 30); // [] // no 2 numbers add up to 30
 * twoSum([ -3, -2, -1, 1, 1,  3,  4], -4); // [-3, -1] // (-3 -1 = -4)
 */
export function twoSum(arr, target) {
    let left = 0;
    let right = arr.length -1;
    
    while (left < right) {
        const sum = arr[left] + arr[right];

        if (sum === target) return [arr[left], arr[right]];
        else if (sum > target) right--;
        else left++;
    }

    return [];
}

//* With this solution we have a Runtime of O(n)