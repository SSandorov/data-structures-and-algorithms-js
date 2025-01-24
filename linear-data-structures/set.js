//? Practice Questions

//? 1. Most common word
//* Given a text and a list of banned words. Find the most common word that
//* is not on the banned list. You might need to sanitize the text and strip
//* out punctuation ‘?!,’.`

/**
 * Find the most common word that is not banned.
 * @example mostCommonWord("It's blue and it's round", ['and']) // it
 * @example mostCommonWord(`How much wood, would a Woodchuck chuck, if a woodchuck
 * could chuck?`,['a'],); // woodchuck or chuck (both show up twice)
 * @example mostCommonWord(`It's a blue ball and its shade... Very BLUE!`, 
 * ['and']); // blue (it show up twice, "it" and "its" once)
 * @param {string} paragraph - The text to sanitize and search on.
 * @param {string[]} banned - List of banned words (lowercase)
 * @returns {string} - The first word that is the most repeated.
 */
function mostCommonWord(paragraph, banned) {
    
    const words = paragraph.toLowerCase().replace(/\W+/g, ' ').split(/\s+/);
    const exclude = new Set(banned);

    const wordsCount = words.reduce((map, word) => {
        if (exclude.has(word)) return map;
        const count = map.get(word) || 0;
        return map.set(word, 1 + count);
    }, new Map());

    const max = Math.max(...wordsCount.values());

    for (const [word, count] of wordsCount.entries()) {
        if (count === max) {
        return word;
        }
    }
    return '';
}

//* Time complexity: O(m + n), where n is paragraph length and m is the number
//* of banned words. If we were NOT using a Set for prohibited words, then the
//* runtime would have been O(mn).
//* Space complexity: O(m + n) The extra space complexity is given by the size
//* of the Map and Set

// console.log(mostCommonWord("It's blue and it's round", ['and']));

//? 2. Longest without repeating

//* Find the length of the longest substring without repeating characters.

/**
 * Find the length of the longest substring without duplicates.
 * @example lenLongestSubstring('abccxyz'); // => 4 (cxyz)
 * @param {string} s - The string.
 * @returns {number} - The length of the longest unique substring.
 */
function lenLongestSubstring(s) {
    let max = 0;
    const set = new Set();

    for(let i = 0, j = 0; j < s.length; j++) {
        while (set.has(s[j])) set.delete(s[i++]);
        set.add(s[j]);
        max = Math.max(max, set.size);
    }

    return max;
}

//* Time: O(n). We visit each letter once.
//* Space: O(W), where W is the max length of non-repeating characters. The
//* maximum size of the Set gives the space complexity. In the worst-case scenario,
//* all letters are unique (W = n), so our space complexity would be O(n). In the
//* avg. case where there are one or more duplicates, it uses less space than n,
//* because W < n.

// console.log(lenLongestSubstring('abccxyz'));
