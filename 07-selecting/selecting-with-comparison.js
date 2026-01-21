import {
  getUnsortedArray,
  getUnsortedArrayWithDuplicates,
} from "../resources/unsorted-array.js";

//? Selecting with comparison

//* Sorting select
const sortingSelect = (arr, k, from = 0, to = arr.length - 1) => {
  for (let i = from; i <= k; i++) {
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
  return arr[k];
};
//* Complexity of O(kn), good for small values, bad for bigger ones

//? Quickselect Family
//* In this case of a selection, the quicksort will sort recursively
//* only one of the sides of the pivot
//* The performance of the quickselect is on average O(n), but it can
//* decrease to O(n^2) if the pivot selected is a bad one

//* We will study the difference in performance based on the selection
//* of the pivot

const quickSelectRandomPivot = (arr, k, left = 0, right = arr.length - 1) => {
  if (left < right) {
    const pick = left + Math.floor((right + 1 - left) * Math.random());
    if (pick !== right) {
      [arr[pick], arr[right]] = [arr[right], arr[pick]];
    }
    const pivot = arr[right];

    let p = left;
    for (let j = left; j < right; j++) {
      if (pivot > arr[j]) {
        [arr[p], arr[j]] = [arr[j], arr[p]];
        p++;
      }
    }
    [arr[p], arr[right]] = [arr[right], arr[p]];

    if (p === k) {
      return;
    } else if (p > k) {
      return quickSelectRandomPivot(arr, k, left, p - 1);
    } else {
      return quickSelectRandomPivot(arr, k, p + 1, right);
    }
  }
};

const qSelect = (arr, k, left = 0, right = arr.length - 1) => {
  quickSelect(arr, k, left, right);
  return arr[k];
};

//? Median of medians
/*
 *   1. Divide the array in groups of up to five elements
 *   2. Find the median of each group
 *   3. Find the median of the medians found in the previous step
 *   4. Use the value to split the array
 *
 *  Compared to the random pivot selection which could have a O(n^2)
 *  performance in the worst case, the MOM pivot selection has an
 *  average of O(n) performance
 */
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

const simpleMedian = (arr, left, right) => {
  insertionSortOptimized(arr, left, right);
  return Math.floor((left + right) / 2);
};

const quickSelectMOMPivot = (arr, k, left = 0, right = arr.length - 1) => {
  if (left < right) {
    let mom;
    if (right - left < 5) {
      mom = simpleMedian(arr, left, right);
    } else {
      let j = left - 1;
      for (let i = left; i <= right; i += 5) {
        const med = simpleMedian(arr, i, Math.min(i + 4, right));
        j++;
        [arr[j], arr[med]] = [arr[med], arr[j]];
      }
      mom = Math.floor((left + j) / 2);
      quickSelectMOMPivot(arr, mom, left, j);
    }
    [arr[right], arr[mom]] = [arr[mom], arr[right]];

    const pivot = arr[right];

    let p = left;
    for (let j = left; j < right; j++) {
      if (pivot > arr[j]) {
        [arr[p], arr[j]] = [arr[j], arr[p]];
        p++;
      }
    }
    [arr[p], arr[right]] = [arr[right], arr[p]];

    if (p === k) {
      return;
    } else if (p > k) {
      return quickSelectMOMPivot(arr, k, left, p - 1);
    } else {
      return quickSelectMOMPivot(arr, k, p + 1, right);
    }
  }
};

//? Repeated median of three
/*
 * This algorithm for selection the pivot does not partition as good as the mom, but it is faster
 * It implements the ninther technique, which goes through the whole array, and generates a set out of
 * the median of three values. Then goes through that set and does the same again.
 * The step of choosing the median of three reduces the size of the array to a ninth, so the recursion
 * goes really fast
 */

const quickSelectMedianOfThreePivot = (
  arr,
  k,
  left = 0,
  right = arr.length - 1,
) => {
  if (left < right) {
    let mom;
    if (right - left < 9) {
      mom = simpleMedian(arr, left, right);
    } else {
      let j1 = left - 1;
      for (let i = left; i <= right; i += 3) {
        const med = simpleMedian(arr, i, Math.min(i + 2, right));
        j1++;
        [arr[j1], arr[med]] = [arr[med], arr[j1]];
      }

      let j2 = left - 1;
      for (let i = left; i <= j1; i += 3) {
        const med = simpleMedian(arr, i, Math.min(i + 2, j1));
        j2++;
        [arr[j2], arr[med]] = [arr[med], arr[j2]];
      }

      mom = Math.floor((left + j2) / 2);
      quickSelectMedianOfThreePivot(arr, mom, left, j2);
    }
    [arr[right], arr[mom]] = [arr[mom], arr[right]];

    const pivot = arr[right];

    let p = left;
    for (let j = left; j < right; j++) {
      if (pivot > arr[j]) {
        [arr[p], arr[j]] = [arr[j], arr[p]];
        p++;
      }
    }
    [arr[p], arr[right]] = [arr[right], arr[p]];

    if (p === k) {
      return;
    } else if (p > k) {
      return quickSelectMOMPivot(arr, k, left, p - 1);
    } else {
      return quickSelectMOMPivot(arr, k, p + 1, right);
    }
  }
};

//? Median with lazy select

/*
* The lazy select uses sampling and may find the right value with a single pass
* with an O(n^(-1/4)) probablity of failure, looping until it succeeds

* This algorithm is different to what we have done until now, because it depends
* on probabilistic properties to work.
* For the performance to be on average of O(n) we need to use a sorting algorithm
* that has an O(n log n) performance, then the performance becomes O(4n^(3/4) log 4n^(3/4)) < O(n)
*/

const mergeSort = (arr, left = 0, right = arr.length - 1) => {
  if (right > left) {
    const split = Math.floor((left + right) / 2);

    const arrL = mergeSort(arr.slice(left, split + 1));
    const arrR = mergeSort(arr.slice(split + 1, right + 1));

    let ll = 0;
    let rr = 0;

    for (let i = left; i <= right; i++) {
      if (ll !== arrL.length && (rr === arrR.length || !arrR[ll] > arrL[rr])) {
        arr[i] = arrL[ll];
        ll++;
      } else {
        arr[i] = arrR[rr];
        rr++;
      }
    }
  }
  return arr;
};

const quickSelectLazyPivot = (arr, k, left = 0, right = arr.length - 1) => {
  const len = right - left + 1;
  const sR = Math.floor(len ** 0.75);
  const dIndex = Math.max(0, Math.floor(sR / 2 - Math.sqrt(len)));
  const uIndex = Math.min(sR - 1, Math.ceil(sR / 2 + Math.sqrt(len)));
  let dSize, uSize, m;
  do {
    const r = [];
    for (let i = 0; i < sR; i++) {
      r.push(arr[left + Math.floor((right - left) * Math.random())]);
    }
    mergeSort(r);

    dSize = uSize = 0;
    m = [];
    for (let i = left; i <= right; i++) {
      if (r[dIndex] > arr[i]) {
        dSize++;
      } else if (arr[i] > r[uIndex]) {
        uSize++;
      } else {
        m.push(arr[i]);
      }
    }
  } while (dSize > len / 2 || uSize > len / 2 || m.length > 4 * sR);

  mergeSort(m);
  return m[Math.floor(len / 2) - dSize];
};

//* Testing all algorithms

console.info("Sorting selection");
console.time("Sorting selection");
sortingSelect([...getUnsortedArray()], getUnsortedArray()[3000]);
console.timeEnd("Sorting selection");
console.info("Quickselect Random Pivot");
console.time("Quickselect Random Pivot");
quickSelectRandomPivot([...getUnsortedArray()], getUnsortedArray()[7000]);
console.timeEnd("Quickselect Random Pivot");
console.info("Quickselect Median of Medians Pivot");
console.time("Quickselect Median of Medians Pivot");
quickSelectMOMPivot([...getUnsortedArray()], getUnsortedArray()[4000]);
console.timeEnd("Quickselect Median of Medians Pivot");
console.info("Quickselect Median of Three Pivot");
console.time("Quickselect Median of Three Pivot");
quickSelectMedianOfThreePivot(
  [...getUnsortedArray()],
  getUnsortedArray()[4000],
);
console.timeEnd("Quickselect Median of Three Pivot");
console.info("Quickselect Lazy Pivot");
console.time("Quickselect Lazy Pivot");
quickSelectLazyPivot([...getUnsortedArray()], getUnsortedArray()[4000]);
console.timeEnd("Quickselect Lazy Pivot");
