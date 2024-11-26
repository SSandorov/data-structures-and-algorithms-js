// import { getMin } from './algorithms-analysis/example-time-complexity.js';
// import { isEmpty } from './algorithms-analysis/big-o-examples/constant.js';
import { binarySearchRecursive } from "./algorithms-analysis/big-o-examples/logarithmic.js";

// console.log(getMin([7, 6, 8, 15, 10]));

let arr = [];

for (let i = 0; i < 1000; i++) {
    Math.random() > 0.5 ? arr.push(i) : null;
}

console.time('isEmpty');
binarySearchRecursive(arr, 0.5, 0);
console.timeEnd('isEmpty');