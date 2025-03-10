//? 1. Factorial in one
//* The code for factorial() is totally correct, but it’s seven lines long! Not that it matters (having a long
//* correct function is better than a short incorrect one), but can you write it in a more compact way?
const factorial = (n) => (n === 0 ? 1 : n * factorial(n - 1));
console.log(factorial(5));

//? 2. Hanoi by Hand
//* The recursive algorithm for the Towers of Hanoi is good for computers, but not so much for normal human beings.
//* Can you design a simple algorithm to solve the puzzle that doesn’t involve recursion?

//? 3. Archery Backtracking
//* Sam Loyd devised another puzzle similar to the Squarest Game on the Beach that you solved earlier in this
//* chapter. In this puzzle, you need to get 100 points by aiming arrows at the target. The important difference
//* is that in this puzzle, you can hit a ring two or more times, while in the other problem you could drop a
//* doll only once.
const archeryBacktracking = (goal, rings, score = 0, hit = []) => {
  if (score === goal) {
    return hit;
  } else if (score > goal || rings.length === 0) {
    return null;
  } else {
    const again = archeryBacktracking(goal, rings, score + rings[0], [...hit, rings[0], ]);
    if (again) {
      return again;
    } else {
      const chosen = rings[0];
      const others = rings.slice(1);
      return (
        archeryBacktracking(goal, others, score + chosen, [...hit, chosen]) ||
        archeryBacktracking(goal, others, score, hit)
      );
    }
  }
};
console.log(archeryBacktracking(100, [40, 39, 24, 23, 17, 16]));