//? Recursion
//* A function calls itself over and over, again and again, until it doesn't
/*
 *   Procedure to solve a recursive problem
 *       - Assume you already have a function that solves your problem
 *       - Find some simple base cases that you can solve directly without any complications
 *       - Figure out how you can solve the original problem by first solving one or more smaller
 *       versions of it
 *       - Apply your assumed function from step 1 to solve the minor problems of step 3, or if
 *       they are small enough, solve them as in step 2
 */

//? Divide and Conquer Strategy
//* You divide the problem into smaller versions of itself, and conquer it using the solutions to all of them

//? Decrease and conquer
//* Decrease and conquer it has "only one smaller" recursion. We will solve this ones first

//? Calculating factorials
const factorial = (n) => {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};

// console.log(factorial(10));

//? Searching and Traversing
//* An example is the Fibonacci series
//* It starts with a 0 and 1, and later, each item is the sum of the two previous ones
const fibonacci = (n) => {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fibonacci(n - 2) + fibonacci(n - 1);
  }
};
// console.log(fibonacci(20));
