import {
  getUnsortedArray,
  getUnsortedArrayWithDuplicates,
} from "../resources/unsorted-array.js";

//? Selecting
//* The goal of the selecting algorithms is to find the value at the array's kth
//* place if the array was ordered. But with the distinction that we do not need
//* the array to be sorted.

//* In the selection algorithms:
//* k = 1 is the minimum of the list
//* k = n is the maximum
//* for JS goes from [0, n - 1]

//? Selection without comparison
//* We can use variations of the bitmap and counting sorting methods to find the kth
//* value of a list quickly, without even attempting a partial sort of data.
//* These algorithms are limited, they only work for numbers and with not a very big
//* range of data

//? Bitmap selection
//* the bitmap in a selection algorithm will return the kth element in comparison with
//* the whole collection of data that the sorting bitmap algorithm does
//* but we will still be reading all data and generating the bitmap with it
const bitmapSelect = (arr, k, from = 0, to = arr.length - 1) => {
  const copy = arr.slice(from, to + 1);
  const minKey = Math.min(...copy);
  const maxKey = Math.max(...copy);

  const bitmap = new Array(maxKey - minKey + 1).fill(false);
  copy.forEach((v) => {
    if (bitmap[v - minKey]) {
      throw new Error("Cannot select duplicate values");
    } else {
      bitmap[v - minKey] = true;
    }
  });

  for (let i = minKey, j = from; i <= maxKey; i++) {
    if (bitmap[i - minKey]) {
      if (j === k) {
        return i;
      }
      j++;
    }
  }
};
//* O(n)

//? Counting Selection
//* We will generate the list of counts, go through them from left to right
//* until we find the value at the kth place
const countingSelect = (arr, k, from = 0, to = arr.length) => {
  const copy = arr.slice(from, to + 1);
  const minKey = Math.min(...copy);
  const maxKey = Math.max(...copy);

  const count = new Array(maxKey - minKey + 1).fill(0);
  copy.forEach((v) => count[v - minKey]++);

  for (let i = minKey, j = from; i <= maxKey; i++) {
    if (count[i - minKey]) {
      j += count[i - minKey];
      if (j > k) {
        return i;
      }
    }
  }
};
//* O(n)

//* Testing all algorithms

console.info("Bitmap selection");
console.time("Bitmap selection");
bitmapSelect([...getUnsortedArray()], getUnsortedArray()[20]);
console.timeEnd("Bitmap selection");

console.info("Count selection");
console.time("Count selection");
countingSelect(
  [...getUnsortedArrayWithDuplicates()],
  getUnsortedArrayWithDuplicates()[20]
);
console.timeEnd("Count selection");
