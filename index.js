// import { getMin } from './algorithms-analysis/example-time-complexity.js';
// import { isEmpty } from './algorithms-analysis/big-o-examples/constant.js';
// import { binarySearchRecursive } from "./algorithms-analysis/big-o-examples/logarithmic.js";
// import { hasDuplicates } from "./algorithms-analysis/big-o-examples/linear.js";
// import { splitSort } from "./algorithms-analysis/big-o-examples/linearithmic.js";
import { getPermutations } from "./algorithms-analysis/big-o-examples/factorial.js";
// console.log(getMin([7, 6, 8, 15, 10]));

let arr = [];

for (let i = 0; i < 10000000; i++) {
    arr.push(Math.floor(Math.random() * 100));
}

console.time('Runtime');
getPermutations('abcdefghijk');
console.timeEnd('Runtime');