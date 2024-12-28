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