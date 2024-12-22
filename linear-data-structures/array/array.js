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
 */
export function twoSum(arr, target) {
    let left = 0;
    let right = 0;

    if (left + right === target) {
        return [left, right];
    };
}