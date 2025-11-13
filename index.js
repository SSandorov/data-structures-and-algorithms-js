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

let randomArray = [];
const nElementsArray = 100000;
for (let i = 0; i <= nElementsArray; i++) {
  randomArray.push(Math.floor(Math.random()*100));
}

//? Sorting with Comparisons

//? Bubbling Up and Down

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
};
console.info("bubble Sort");
console.time();
console.log(bubbleSort([...arrayToBeSorted]));
console.timeEnd();

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
    for (let i = f; i <= t - 1; i++) {
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
};
console.info("Shuttle Sort");
console.time();
console.log(shuttleSort([...arrayToBeSorted]));
console.timeEnd();

//? Sorting Strategies for Playing Cards

//? Selection Sort
//* This algorithm will look for the lowest number and swap its position with the first element on the left. It will keep
//* on doing it until if orders the array
const selectionSort = (arr, from = 0, to = arr.length - 1) => {
  for (let i = from; i <= to; i++) {
    let m = i;
    for (let j = i + 1; j <= to; j++) {
      if (arr[m] > arr[j]) {
        m = j;
      }
    }
    if (m !== i) {
      [arr[i], arr[m]] = [arr[m], arr[i]];
    }
  }
  return arr;
};
//* This algorithm is still a O(n^2)

//? Insertion Sort
//* The first number is already sorted. When you take the second one, you compare it with the first one and sort them.
//* Then you do it with the third element, and insert it where it has to go to sort them all. You keep on going
//* until is sorted. It is called insertion sort because of the way you insert new cards among the previously
//* sorted ones
const insertionSort2Loop = (arr, from = 0, to = arr.length - 1) => {
  for (let i = from + 1; i <= to; i++) {
    for (let j = i; j > from && arr[j - 1] > arr[j]; j--) {
      [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
    }
  }
  return arr;
};

const insertionSortOptimized = (arr, from = 0, to = arr.length - 1) => {
  for (let i = from + 1; i <= to; i++) {
    const temp = arr[i];
    let j;
    for (j = i; j > from && arr[j - 1] > temp; j--) {
      arr[j] = arr[j - 1];
    }
    arr[j] = temp;
  }
  return arr;
};
//* Both of them are O(n^2)

//? Making Bigger Jumps with Comb and shell Sort

//? Comb sort
//* Similar to bubble sort, but in this case you consider larger gaps to compare with
//* Each pass will be smaller than the previous until you are left with only gap, and
//* a bubble sort will be done
const combSort = (arr, from = 0, to = arr.length - 1) => {
  const SHRINK_FACTOR = 1.3;

  let gap = to - from + 1;
  for (;;) {
    gap = Math.floor(gap / SHRINK_FACTOR);
    if (gap === 1) {
      return bubbleSort(arr, from, to);
    }
    for (let i = from; i <= to - gap; i++) {
      if (arr[i] > arr[i + gap]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      }
    }
  }
};
//* O(n^2)

//? Shell Sort
//* It combines the comb sort with the insertion sort. It compares elements with a gap between them
//* and swaps them. Then the gap is reduced and the same is done. We continue until the gap is 1
//* and do instertion until is completed.
const shellSort = (arr, from = 0, to = arr.length - 1) => {
  const gaps = [1];

  while (gaps[0] < (to - from) / 3) {
    gaps.unshift(gaps[0] * 3 + 1);
  }

  gaps.forEach((gap) => {
    for (let i = from + gap; i <= to; i++) {
      const temp = arr[i];
      let j;
      for (j = i; j >= from + gap && arr[j - gap] > temp; j -= gap) {
        arr[j] = arr[j - gap];
      }
      arr[j] = temp;
    }
  });
  return arr;
};
//* O(n^1.5)

//? Going for speed with Quicksort
//* It achieves a O(n logn) BUT with its worst-case scenario a O(n^2), so we have to be aware of
//* the cases where we must not use it
const badQuickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    const pivot = arr[right];

    let p = left;
    for (let j = left; j < right; j++) {
      if (pivot > arr[j]) {
        [arr[p] , arr[j]] = [arr[j], arr[p]];
        p++;
      }
    }
    [arr[p] , arr[right]] = [arr[right], arr[p]];

    badQuickSort(arr, left, p - 1);
    badQuickSort(arr, p + 1, right);
  }

  return arr;
}

//? Standard version Quicksort
//* Recursively select an element of the array, and sort the two subarrays between the element depending if they are smaller
//* or bigger than the element. You end up with a sorted array
const standardQuicksort = (arr, left = 0, right = arr.length - 1) => {
  const middle = Math.floor((left + right)/2);
  if (arr[left] > arr[middle]) {
    [arr[left], arr[middle]] = [arr[middle], arr[left]];
  }
  if (arr[left] > arr[right]) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
  }
  if (arr[right] > arr[middle]) {
    [arr[right], arr[middle]] = [arr[middle], arr[right]];
  }

  if (left < right){
    const pivot = arr[right];

    let p = left;
    for (let j = left; j < right; j++) {
      if (pivot > arr[j]) {
        [arr[p], arr[j]] = [arr[j], arr[p]];
        p++;
      }
    }
    [arr[p], arr[right]] = [arr[right], arr[p]];

    standardQuicksort(arr, left, p - 1);
    standardQuicksort(arr, p + 1, right);
  }

  return arr;
}

//? Hybrid version
//* It performs better for bigger arrays, so for smaller you can use another approach
const CUTOFF = 7;
const hybridQuicksort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    if (right - left < CUTOFF) {
      insertionSortOptimized(arr, left, right);
    } else {
      standardQuicksort(arr, left, right);
    }
  }
  return arr;
}

// Test message

//* Testing all algorithms

console.info("Selection Sort");
console.time("Selection Sort");
selectionSort([...randomArray]);
console.timeEnd("Selection Sort");

console.info("Insertion Sort");
console.time("Insertion Sort");
insertionSort2Loop([...randomArray]);
console.timeEnd("Insertion Sort");

console.info("Insertion Sort Optimized");
console.time("Insertion Sort Optimized");
insertionSortOptimized([...randomArray]);
console.timeEnd("Insertion Sort Optimized");

console.info("Comb Sort");
console.time("Comb Sort");
combSort([...randomArray]);
console.timeEnd("Comb Sort");

console.info("Shell Sort");
console.time("Shell Sort");
shellSort([...randomArray]);
console.timeEnd("Shell Sort");

console.info("Bad Quicksort");
console.time("Bad Version");
badQuickSort([...randomArray]);
console.timeEnd("Bad Version");

console.info("Quicksort Standard Version");
console.time("Quicksort Standard Version");
standardQuicksort([...randomArray]);
console.timeEnd("Quicksort Standard Version");

console.info("Quicksort Hybrid Version");
console.time("Quicksort Hybrid Version");
hybridQuicksort([...randomArray]);
console.timeEnd("Quicksort Hybrid Version");