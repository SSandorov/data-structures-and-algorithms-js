//? Sorting algorithms

/*
 *   A sorting algorithm is an algorithm that, given a list of records containing a key and some data, reorders the list so that
 *   the keys are in nondecreasing order, and the output list is a permutation of the inputn list, retaining all original records
 */


//* own sort method in JS sort() and toSorted()

// const a = [22, 9, 60, 12, 4, 56];
// console.log(a.toSorted());
// console.log(a.sort());
// console.log(a.toSorted((a, b) => a - b));
// console.log(a.sort((a, b) => a - b));

//! Old version on JS do not take into consideration the stability in the sort method.
const arrayToBeSorted = [34, 12, 22, 9, 4, 60, 56, 14];

//? Sorting with Comparisons

//? Bubble sort
//* This algorithm has a subpar performance O(n^2), but it is easy to implement. You can use it for small sets of data.
//* Its name comes for the simple idea that larger numbers represent bubbles that bubble up to the top of the list.

//* It starts at the beginning of an array and goes in order through all elements in the array, and if an element is
//* greater than the following element, it swaps them
const bubbleSort = (arr, from = 0, to = arr.length - 1) => {
  for (let j = to; j > from; j--) {
    for (let i = from; i < j; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      }
    }
  }
  return arr;
}
console.info('bubble Sort')
console.time()
console.log(bubbleSort(arrayToBeSorted))
console.timeEnd()

//? Sinking Sort
//* Bubble sort quickly moves the greates values to the end of an array, but the smallest values may take a while to reach
//* their final positions
//* Sinking sort does the opposite
//? Shuttle Sort | Cocktail Shaker Sort | Bidirectional Bubble Sort
//* Alternates a pass of bubbling and a pass of sinking to get a better algorithm than the previous two.
//* Still an O(n^2) but double or more the speed of Bubble Sort or Sinking Sort
const shuttleSort = (arr, from = 0, to = arr.length - 1) => {
  let f = from;
  let t = to;

  while (f < t) {
    for (let i = f; i <= t -1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      }
    }
    t--;

    for (let i = t - 1; i >= f; i--) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      }
    }
    f++;
  }

  return arr;
}
console.info('Shuttle Sort')
console.time()
console.log(shuttleSort(arrayToBeSorted))
console.timeEnd()