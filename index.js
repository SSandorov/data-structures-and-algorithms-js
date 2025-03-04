//? Dynamic Programming
//* Is a technique for solving a problem by first solving other (smaller) problems and storing
//* those results, so they do not need to be recalculated if they are needed again

/*
 ?  It has two types
 *
 *  Top down DP
 *  You try to solve the original problem directly and then recursively solve
 *  smaller problems first
 *
 *  Bottom up DP
 *  You start with the simplest problems and move upward, solving harder
 *  problems step by step
 * 
 * 
 ?  And we are going to look at two methods that save previous results
 * 
 *  Memoization
 *  Based on a higher-order function in functional programming and more suited for top down DP
 *  It is linked to recursive implementations
 * 
 *  It is considered slower (due to recursion) but will calculate strictly what is needed
 * 
 *  Tabulation
 *  Based or arrays or matrices, best suited for bottom up DP
 *  It is linked for straightforward, nonrecursive solutions
 * 
 *  It is probably quicker (no recursion) but may solve subproblems that are not needed
 */

/*
 *  Memoize is a functional programming technique that may be applied to any pure function.
 *  The idea is that when a memoized function is called, it first checks an internal cache
 *  to see whether the calculation was already made. If so, it returns the cached value instead
 *  of redoing the calculation. If the requested value hasn’t been calculated before, the memoized
 *  function does its work, but before returning the result to the caller, it stores it in the internal
 *  cache for future reference.
 *
 *  You can find the high-order function fast-memoize in npm, but we can do it by hand also
 */
const memoize = (fn) => {
  const cache = {};
  return (...args) => {
    const strX = JSON.stringify(args);
    return strX in cache ? cache[strX] : (cache[strX] = fn(...args));
  };
};

//* We can apply the memoize to the fibonacci sequence for big numbers

const memoFibonacci = memoize((n) => {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return memoFibonacci(n - 2) + memoFibonacci(n - 1);
  }
});
console.log(memoFibonacci(100));
//* Instead of being exponential O(k^n), it becomes linear O(n)
//* This happens because Fibonacci 100 includes all previous numbers, so it only
//* needs to calculate the 100 and extract from memory the rest of the values

//? Line Breaking with top down DP
