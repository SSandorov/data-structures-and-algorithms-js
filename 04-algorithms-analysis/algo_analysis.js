const sumRange = (arr, from, to) => {
    let sum = 0;
    for (let i = from; i <= to; i++) {
        sum += arr[i];
    }
    return sum;
}
//* Space complexity: O(1)
//* Time complexity: O(n)

//* Solving with dynamic programming
const precomputeSums = (arr) => {
    let partial = Array(arr.length);
    partial[0] = arr[0];
    for (i=1; i<arr.length; i++) {
        partial[i] = partial[i-1] + arr[i];
    }
}

const sumRange2 = (partial, from, to) => from === 0 ? partial[to] : partial[to] - partial[from-1];