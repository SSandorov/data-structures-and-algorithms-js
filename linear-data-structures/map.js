//* There are two popular ways to implement Maps, key/value pair data structures
//* 1. Array + Hash Function = Hash Map
//* 2. Balanced Binary Search Tree: TreeMap

//* Here we will focus on the Hash Map, because JS has it built-in.

//* Hash Map patterns for solving interview questions

//? Smart Caching

/*
*   One everyday use case for key/value data structures is caching. If you are 
*   working on a trendy website, you can save scale better if you cache the results 
*   instead of hitting the database and other expensive services every time. That way,
*   you can server many more users requesting the same data. A common issue with cache
*   you want to expire data you don’t often use to make room for hot data. This next
*   exercise is going to help you do that.
*/

//* 1. Design a Least Recently Used (LRU) cache. This cache has a limit on the number
//* of items it can store. Once the limit it’s reached, it will discard the least
//* recently used item. Design a class that takes a limit value, and the methods
//* put and get, to insert and get data.
/**
 * Least Recently Used (LRU) cache.
 * Key/Value storage with fixed max number of items.
 * Least recently used items are discarded once the limit is reached.
 * Reading and updating the values mark the items as recently used.
 */
class LRUCache extends Map {
    /**
     * @param {number} capacity - The max number of items on the cache
     */
    constructor(capacity = 2) {
        super();
        this.capacity = capacity;
    }
    /**
     * Get the value associated with the key. Mark keys as recently used.
     * @param {number} key
     * @returns {number} value or if not found -1
     */
    get(key) {
        if (!super.has(key)) return -1;
        const value = super.get(key);
        this.put(key, value); // re-insert at the top (most recent).
        return value;
    }

    /**
     * Upsert key/value pair. Updates mark keys are recently used.
     * @param {number} key
     * @param {number} value
     * @returns {void}
     */
    put(key, value) {
        if (super.has(key)) super.delete(key);
        super.set(key, value);
        if (super.size > this.capacity) {
            const oldestKey = super.keys().next().value;
            super.delete(oldestKey);
        }
    }
}

const c = new LRUCache(2); // capacity: 2
c.put(2, 1); // Cache is [2:1]
c.put(1, 1); // Cache is [2:1, 1:1]
c.put(2, 3); // Cache is [1:1, 2:3]
c.put(4, 1); // Removed 1. Cache is [2:3, 4:1]
c.get(1); // Returns -1 (key 1 not found)
c.get(2); // Returns 3. Cache is [4:1, 2:3]
c.put(5, 5); // Removed key 4. Cache is [2:3, 5:5]
c.get(4); // Returns -1 (key 4 not found)

//* Time Complexity: O(1)
//* Space complexity: O(k) --> k is the capacity of the cache

//? Trading Speed for Space

//* Maps have a O(1) runtime for lookups and O(n) space complexity.
//* It can improve the speed of programs in exchange for using a
//* little bit more of memory. Let’s do an example.

//* 2. Given a text, return the most common words in descending order.
//* You should sanitize the input by removing punctuation !?',;. and
//* converting all letters to lowercase. Return the most common words
//* in descending order.

/**
 * Given text and banned words,
 * return the most common words in descending order.
 * @param {string} text - The text to parse.
 * @param {number} n - The number of results.
 * @return {string[]}
 * @example
    * mostCommonWords(
    'The map, maps keys to values; Keys can be anything.',
    1); // ['keys']
    mostCommonWords(
    'Look at it! What is it? It does look like my code from 1 year ago',
    2); // ['it', 'look']
    mostCommonWords(
    'a; a,b, a\'s c A!; b,B,    c.',
    4); // ['a', 'b', 'c', 's']
 */
export function mostCommonWords(text, n = 1) {
    const regex = /\W+/;
    const filteredWords = text.toLowerCase().split(regex).filter(Boolean);

    const map = filteredWords.reduce((m, w) => m.set(w, 1 + (m.get(w) || 0)) , new Map());

    return Array.from(map.entries())
        .sort((a, b) => b[1] - a[1])
        .slice(0, n)
        .map((w) => w[0]);
  }

// console.log(mostCommonWords(
    
//     'The map, maps keys to values; Keys can be anything.',
//     1
// ));

//* Time complexity: O(n log n)
//* Space Complexity: O(n)

//? Sliding Window

//* We use two pointers and return the window between the pointers

//* 3. Return the length of the longest substring without repeating characters

/**
 * Return the length of the longest substring without repeating characters.
 * @param {string} s
 * @return {number}
 * @examples
 * longestSubstring('abcdaefg'); // 7 ('bcdaefg')
 * longestSubstring('abbaa'); // 2 ('ab')
 * longestSubstring('abbadvdf') // 4 ('badv')
 */
function longestSubstring(s) {
    const map = new Map();
    let max = 0;

    for (let hi = 0, lo = 0; hi < s.length; hi++) {
        if (map.has(s[hi])) lo = Math.max(lo, map.get(s[hi]) + 1);
        map.set(s[hi], hi);
        max = Math.max(max, hi - lo + 1)
    }

    return max;
  };

// console.log(longestSubstring('abcdaefg'));

//* Time Complexity: O(n)
//* Space Complexity: O(n)

//? Practice Questions

//? Fit two movies in a flight

//* 4. You are working in an entertainment recommendation system for an airline.
//* Given a flight duration (target) and an array of movies length, you need to
//* recommend two movies that fit exactly the length of the flight. Return an
//* array with the indices of the two numbers that add up to the target. No
//* duplicates are allowed. If it’s not possible return an empty array

/**
 * Find two numbers that add up to the target value.
 * Return empty array if not found.
 * @param {number[]} nums - Array of integers
 * @param {number} target - The target sum.
 * @returns {[number, number]} - Array with index 1 and index 2
 * @example
 * twoSum([113, 248, 80, 200, 91, 201, 68], 316); // [1, 6] (248 + 68 = 316)
 * twoSum([150, 100, 200], 300); // [2, 3] (100 + 200 = 300)
 * twoSum([150, 100, 200], 150); // [] (No two numbers add up to 150)
 */
function twoSum(nums, target) {

    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (map.has(nums[i])) return [map.get(nums[i]), i];
        map.set(complement, i);
    }

    return [];
}

// console.log(twoSum([113, 248, 80, 200, 91, 201, 68], 316));

//* Time Complexity: O(n)
//* Space Complexity: O(n)

//? Subarray sum that equals K

//* Given an array of integers, find all the possible subarrays to add up to k
//* Return the count
/**
 * Find the number of subarrays that add up to k.
 * @example subarraySum([1, 1, 1], 1); // 3 ([1], [1], [1] equals 1)
 * @example subaraySum([1, 2, 3, 0, 1, 4, 0, 5], 5) // 8 | [2, 3], [2,3,0], [0,1,4], [0,1,4,0], [1,4], [1,4,0], [0,5], [5]
 * 
 * @param {number[]} nums - Array of integers.
 * @param {number} k - The target sum.
 * @returns {number} - The number of solutions.
 */
function subarraySum(nums, k) {

    let solutions = 0;
    let sum = 0;
    const map = new Map([[0, 1]]);

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (map.has(sum - k)) solutions += map.get(sum - k);
        map.set(sum, 1 + (map.get(sum) || 0));
    }

    return solutions;
}
//* Time complexity: O(n)
//* Space complexity: O(n)
