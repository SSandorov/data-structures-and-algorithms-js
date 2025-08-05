//? Recursion
//* A function calls itself over and over, again and again, until it doesn't
/*
 *   Procedure to solve a recursive problem
 *       1 Assume you already have a function that solves your problem
 *       2 Find some simple base cases that you can solve directly without any complications
 *       3 Figure out how you can solve the original problem by first solving one or more smaller
 *       versions of it
 *       4 Apply your assumed function from step 1 to solve the minor problems of step 3, or if
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
export const fibonacci = (n) => {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fibonacci(n - 2) + fibonacci(n - 1);
  }
};
// console.log(fibonacci(20));

//? Sorting and Puzzles
//* Towers of Hanoi puzzle
const towers = (disks, origin, extra, destination) => {
  if (disks > 0) {
    towers(disks - 1, origin, destination, extra);
    console.log(`Move disk ${disks} from ${origin} to ${destination}`);
    towers(disks - 1, extra, origin, destination);
  }
};
towers(4, "A", "B", "C");

//? Backtracking Technique
//* When facing multiple options, choose one and try finding a solution
//* If you succeed you are done
//* If you fail, backtrack to the point where you made the selection and choose a different option
//* If you run out of options, there is no solution to the problem

//? Finding a path in a maze
//* It is a typical backtracking problem
/*
  solveMaze(fromCell, toCell, maze, path=[])
    if (fromCell === toCell) {
      return path // success!
    }
    mark fromCell as visited
    for all nextCell cells adjacent to fromCell {
      updatePath = solveMaze(nextCell, toCell, maze, path + fromCell)
        if updatePath is not null {
          return path
        }
    }
    All adjacent cells were tried, and failed ...
    return null // failure
  */

//? Solving the Squarest game on the Beach Puzzle
const beachPuzzle = (goal, standing, score = 0, dropped = []) => {
  if (score === goal) {
    return dropped;
  } else if (score > goal || standing.length === 0) {
    return null;
  } else {
    const chosen = standing[0];
    const others = standing.slice(1);
    return (
      beachPuzzle(goal, others, score + chosen, [...dropped, chosen]) ||
      beachPuzzle(goal, others, score, dropped)
    );
  }
};
console.log(beachPuzzle(50, [15, 9, 30, 21, 19, 3, 12, 6, 25, 27]));
