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
// console.log(memoFibonacci(100));
//* Instead of being exponential O(k^n), it becomes linear O(n)
//* This happens because Fibonacci 100 includes all previous numbers, so it only
//* needs to calculate the 100 and extract from memory the rest of the values

//? Line Breaking with top down DP

// const costOfFragment = memoize((p, q) => {
//   const s = totalWidth(p, q);

//   if (s <= MW) {
//     return [(MW - s) ** 2, [q]];
//   }

//   let optimum = Infinity;
//   let split = [];

//   for (let r = p; r < q; r++) {
//     const left = costOfFragment(p, r);
//     const right = costOfFragment(r + 1, 1);
//     const newTry = left[o] + right[0];

//     if (newTry < optimum) {
//       optimum = newTry;
//       split = [r, ...right[1]];
//     }
//   }
//   return [optimum, split];
// });

// const blocks = [7, 2, 5, 3, 6];
// const optimalDistrubution = costOfFragment(0, blocks.length - 1);
// console.log(optimalDistrubution[0], optimalDistrubution[1]);

//? Fibonnaci Series with Bottom up DP
const fibonacciBottomUp = (n) => {
  if (n < 2) {
    return n;
  } else {
    let a = 0;
    let b = 1;

    while (n > 1) {
      [a, b] = [b, a + b];
      n--;
    }
    return b;
  }
};
// console.log(fibonacciBottomUp(100));

//? Summing ranges recursiveky with Bottom Up DP

//* First implementation with a loop --> O(n)
const totalWidth1 = (arr, from, to) => {
  let sum = 0;
  for (let i = from; i <= to; i++) {
    sum += arr[i];
  }
  return sum;
};

//* Second implementation with loop but memorizing previous implementations
const totalWidth2 = memoize(totalWidth1);

//* Third is applying recursion to break it in small problems
const totalWidth3 = memoize((arr, from, to) => {
  if (from === to) {
    return arr[from];
  } else if (from === 0) {
    return totalWidth3(arr, 0, to -1) + arr[to];
  } else {
    return totalWidth3(arr, 0, to) - totalWidth3(arr, 0, from - 1);
  }
});
//* Because it caches all previous ranges, it will start as an O(n) but it will end up as a
//* O(1)

//? Summing ranges by precomputing with Bottom Up DP

//* Using bottom up will produce a O(1) complexity
const totalWidth4 = ((tab) => {
  const partial = [0];
  tab.forEach((v, i) => {
    partial[i + 1] = partial[i] + v;
  });
  return (from, to) => partial[to + 1] - partial[from];
})(arr);

