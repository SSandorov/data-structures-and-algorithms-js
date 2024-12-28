//* Array patterns for solving interview questions

//? Two Pointers Pattern

//* Usually, we use one pointer to navigate each element in an array. However,
//* there are times when having two pointers (left/right, low/high) comes in handy.

//* 1. Given a sorted array of integers, find two numbers that add up to a target
//* and return their values.

/**
 * Find two numbers that add up target
 * @param arr - The array of integers
 * @param target - The target
 * @returns {number[]} - array with the values that add up to target
 * @example
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

// console.log(twoSum([ -5, -3, -1, 1, 2 ], 30));

//* With this solution we have a Runtime of O(n)

//? Sliding Window Pattern

//* Similar to the two pointers. The difference is that the distance between the left
//* and the right pointer is always the same. Also, the numbers do not need to be
//* sorted

//* 2. Find the max sum of an array of integers, only taking k items from the right
//* and left side sequentially.
//* Contraints: k won't exceed the number of elements in the array --> 1 <= k <= n

/**
 * Find the max sum of an array of integers,
 * only taking `k` items from the right and left side.
 *
 * @param {number[]} arr - The array of integers
 * @param {number} k - The number of elements to sum up.
 * @returns {number}
 * @example
 * maxSum([1,2,3], 3); // 6 // (1 + 2 + 3 = 6)
 * maxSum([1,1,1,1,200,1], 3); // 202 // (1 + 200 + 1 = 202)
 * maxSum([3, 10, 12, 4, 7, 2, 100, 1], 3); // 104 // (3 + 1 + 100 = 104)
 * maxSum([1,200,1], 1); // 6 // (1 + 2 + 3 = 6)
 */
export function maxSum(arr, k) {
    let left = k - 1;
    let right = arr.length - 1;
    let sum = 0;

    for (let i = 0; i < k; i++) sum += arr[i];

    let max = sum;

    for (let i = 0; i < k; i++) {
        sum += arr[right--] - arr[left--];
        max = Math.max(max, sum);
    }

    return max;
  };

// console.log(maxSum([3, 10, 12, 4, 7, 2, 100, 1], 3));

//* It has a Runtime of O(n)

//? Max Subarray

//* 3. Given an array of integers, find the maximum sum of consecutive elements
//* (subarray)

/**
 * Find the maximum sum of consecutive elements (subarray)
 * @param {number[]} arr - Array
 * @returns {number} max sum
 * @example
 * maxSubArray([1, -3, 10, -5]); // 10 (taking only 10)
 * maxSubArray([-3, 4,-1, 2, 1, -5]); // 6 (sum [4,-1, 2, 1])
 * maxSubArray([-2, 1, -3, 4, -1, 3, 1]); // 7 (sum [4,-1, 3, 1])
 */
export function maxSubArray(arr) {
    let max = -Infinity;
    let local = 0;

    arr.forEach((element) => {
        local = Math.max(element, local + element);
        max = Math.max(max, local);
    })
    return max;
}

// console.log(maxSubArray([-1, 6, -3, 8]))

//* The runtime is O(n) and the space complexity of O(1)

//? Best Time to Buy and Sell a Stock

//* 4. You have an array of integers. Each value represents the closing value 
//* of the stock on that day. You have only one chance to buy and then sell.
//* What's the maximum profit you can obtain? 
//* Note: you have to buy first and then sell
/**
 * @param {number[]} prices - Array with daily stock prices
 * @returns {number} Max profit
 * @examples
 * maxProfit([1, 2, 3]); // 2 (buying at 1 and selling at 3)
 * maxProfit([3, 2, 1]); // 0 (no buys)
 * maxProfit([5, 10, 5, 10]); // 5 (buying at 5 and selling at 10)
 */
export function maxProfit(prices) {

    let bestBuy = Infinity;
    let bestProfit = 0;

    prices.forEach(price => {
        bestBuy = Math.min(bestBuy, price);
        bestProfit = Math.max(bestProfit, price - bestBuy);
    })
    
    return bestProfit;
}

// console.log(maxProfit([5, 10, 5, 10]));

//* The runtime is O(n) and the space complexity of O(1).