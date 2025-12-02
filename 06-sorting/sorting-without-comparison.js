import {
  getUnsortedArray,
  getUnsortedArrayWithDuplicates,
} from "../resources/unsorted-array.js";

const unsortedArrayWithUniqueValues = getUnsortedArray();
const unsortedArrayWithDuplicates = getUnsortedArrayWithDuplicates();

//? Sorting without comparison
//* With these algorithms we are not comparing the keys, instead we will
//* use the values to know where they should go in the final, ordered list

//* In the cases these algorithms can be applied, the performance becomes O(n),
//* which is impossible to beat

//? Bitmap Sort
/*
 *   The limitations are:
 *       - Sort only numbers (no key/value pairs)
 *       - Know the range of numbers, and the range is not too big
 *       - Numbers are all unique
 */

const bitmapSort = (arr, from = 0, to = arr.length - 1) => {
  const copy = arr.slice(from, to + 1);

  const minKey = Math.min(...copy);
  const maxKey = Math.max(...copy);

  const bitmap = new Array(maxKey - minKey + 1).fill(false);

  copy.forEach((v) => {
    if (bitmap[v - minKey]) {
      throw new Error("Cannot sort duplicated values");
    } else {
      bitmap[v - minKey] = true;
    }
  });

  let k = from;
  bitmap.forEach((v, i) => {
    if (v) {
      arr[k] = i + minKey;
      k++;
    }
  });

  return arr;
};

//? Counting Sort
/*
*   This algorithm improves the bitmap by calculating where each sorted element should go.
*   To do it, we count how many times each key appears and then use that information to decide
*   where to place sorted elements in the output array.

*   It also accepts duplicates
*/

const countingSort = (arr, from = 0, to = arr.length - 1) => {
  const copy = arr.slice(from, to + 1);

  const minKey = Math.min(...copy);
  const maxKey = Math.max(...copy);

  const count = new Array(maxKey - minKey + 1).fill(0);

  copy.forEach((v) => count[v - minKey]++);

  const place = new Array(maxKey - minKey + 1).fill(0);
  place.forEach((v, i) => {
    place[i] = i === 0 ? from : place[i - 1] + count[i - 1];
  });

  copy.forEach((v) => {
    arr[place[v - minKey]] = v;
    place[v - minKey]++;
  });

  return arr;
};

console.info("Bitmap");
console.time("Bitmap");
bitmapSort([...unsortedArrayWithUniqueValues]);
console.timeEnd("Bitmap");

console.info("Counting Sort");
console.time("Counting Sort");
countingSort([...unsortedArrayWithDuplicates]);
console.timeEnd("Counting Sort");
