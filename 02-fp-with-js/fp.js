const under21 = (value) => value < 21;
const equal21 = (value) => value === 21;

let myArray = [22, 9, 60, 12, 4, 56];

//? Filter an array
let filterArray = myArray.filter(under21);
console.log("Filter array: ", filterArray);

//? Searching an array

console.log("Find: ", myArray.find(under21));
console.log("Find Index: ", myArray.findIndex(under21));
console.log("Find: ", myArray.find(equal21));
console.log("Find Index: ", myArray.findIndex(equal21));

//? Transforming an array
let transformArray = myArray.map((x) => 10 * x);
console.log("Transform array", transformArray);

//? Reducing an array to a single value

//! Recommended to always pass an initial value in case
//! we have an empty string, so we do not have a runtime error
const reducedArray = myArray.reduce((a, v) => a + v, 0);
console.log("Reduced array: ", reducedArray);

const reducedArray2 = myArray.reduce((a, v) => ({ s: a.s + v, c: a.c + 1 }), {
  s: 0,
  c: 0,
});
console.log("Reduced array 2: ", reducedArray2);

//? Looping through arrays

let sum = 0;
myArray.forEach((v) => (sum += v));
console.log(sum);

//? High-Order functions

const addLogging =
  (fn) =>
  (...args) => {
    console.log("High-order functionality");
    console.log("Entering ", fn.name, " with ", ...args);

    const toReturn = fn(...args);

    console.log(`Exiting ${fn.name} returning ${toReturn}`);

    return toReturn;
  };

const sum2 = (a, b) => {
  console.log("Calculating...");
  return a + b;
};

addLogging(sum2)(22, 9);
