// import { getMin } from './algorithms-analysis/example-time-complexity.js';
import { isEmpty } from './algorithms-analysis/big-o-examples/constant.js';

// console.log(getMin([7, 6, 8, 15, 10]));

let arr = [];

for (let i = 0; i < 1000000; i++) {
    arr.push(i);
}

console.time('isEmpty');
isEmpty(arr);
console.timeEnd('isEmpty');