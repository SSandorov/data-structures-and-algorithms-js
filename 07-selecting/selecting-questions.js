//? 1. Tennis sudden death
/*
 *   Suppose 111 tennis players enter a knockout tournament to find the champion. In each round, random pairs of players
 *   play each other, and the loser is out of the tournament, while the winner passes to the next round. If there's an odd
 *   number of players, one player gets a free pass to the next round. How many matches will be necessary to find the
 *   champion? How many extra matches will you need to find the second-best player? (And no, whoever lost to the champion
 *   in the last game isn't necessarily the second-best player) Can you generalise your answer for n players?
 */
//* It would be 110 matches. Generalising it would be n -1 matches
//* The numbers of rounds is the logarithm of n in base 2, so the total number of comparisons to learn the two minimum values
//* of an array is n - 1 + log(2)n

//? 2. Take five
/*
 *   Take the median of five elements. What's the absolute minimum number of comparisons that guarantees finding that median?
 *   Can you provide an appropiate medianOf5(a, b, c, d, e) function that will return the median of its arguments? You could
 *   be achieving a better simpleMedian() function with this!
 */
const medianOf5 = (a, b, c, d, e) => {
  if (a > b) {
    [a, b] = [b, a];
  }
  if (c > d) {
    [c, d] = [d, c];
  }
  if (a > c) {
    [a, c] = [c, a];
    [b, d] = [d, b];
  }
  if (b > e) {
    [b, e] = [e, b];
  }
  if (c > b) {
    //* b < c < d and b < e: b is not the median, and d is not either
    return e > c ? c : e;
  } else {
    return d > b ? b : c;
  }
};
//? 3. Top to bottom
/*
 *   If k is close to n, the length of the input array, your selection sort-based algorithm would have a bad quadratic performance,
 *   but you can make it quite better with a simple trick; can you see how?
 */

//? 4. Just iterate
/*
 *   Qhickselect does a single tail recursive call and may be rewritten to avoid all recursion; can you do it?
 */

//? 5. Select without changing
/*
 *   As is, qSelect returns the desired kth value, but it has a side effect: the input array will be changed. Can you
 *   modify qSelect to avoid secondary effects?
 */

//? 6. The Sicilian Way
/*
 *   The repeated step selection algorithm does two rounds of choosing mediands of three, and finally, it uses recursion to find
 *   the median of the resulting array of medians of medians. Implement the following variation: instead of recursion, keep applying
 *   the same methhod (grouping by three, choosing the median, and so on) until the resulting array is less than 3 in length, and
 *   then choose the pivot from the samll array without recursion
 */
