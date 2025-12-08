import { getUnsortedArray, getUnsortedArrayWithDuplicates} from './resources/unsorted-array.js';

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
}
//* Complexity of O(kn), good for small values, bad for bigger ones

//? Quickselect Family
//* In this case of a selection, the quicksort will sort recursively
//* only one of the sides of the pivot
//* The performance of the quickselect is on average O(n), but it can
//* decrease to O(n^2) if the pivot selected is a bad one

//* We will study the difference in performance based on the selection
//* of the pivot

const quickSelect = (arr, k, left = 0, right = arr.length - 1) => {
    if (left < right) {
        randomPivot(arr, left, right);

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
            return quickSelect(arr, k, left, p - 1);
        } else {
            return quickSelect(arr, k , p + 1, right);
        }
    }
}

const randomPivot = (arr, left, right) => {
    const pick = left + Math.floor((right + 1 - left) * Math.random());
    if (pick !== right) {
        [arr[pick], arr[right]] = [arr[right], arr[pick]];
    }
}

const qSelect = (arr, k, left = 0, right = arr.length - 1) => {
    quickSelect(arr, k, left, right);
    return arr[k];
}

//? Median of medians
/*
*   1. Divide the array in groups of up to five elements
*   2. Find the median of each group
*   3. Find the median of the medians found in the previous step
*   4. Use the value to split the array
*/


//* Testing all algorithms

console.info("Sorting selection");
console.time("Sorting selection");
sortingSelect([...getUnsortedArray()], getUnsortedArray()[1]);
console.timeEnd("Sorting selection");
console.info("Quickselect Random Pivot");
console.time("Quickselect Random Pivot");
quickSelect([...getUnsortedArray()], getUnsortedArray()[3000]);
console.timeEnd("Quickselect Random Pivot");