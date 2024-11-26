// import { getMin } from './algorithms-analysis/example-time-complexity.js';
// import { isEmpty } from './algorithms-analysis/big-o-examples/constant.js';
// import { binarySearchRecursive } from "./algorithms-analysis/big-o-examples/logarithmic.js";
import { hasDuplicates } from "./algorithms-analysis/big-o-examples/linear.js";
// console.log(getMin([7, 6, 8, 15, 10]));

let arr = [];

for (let i = 0; i < 100; i++) {
    arr.push(i);
}

console.time('isEmpty');
hasDuplicates(arr);
console.timeEnd('isEmpty');