import { addTiming, negate } from "./functional-programming/fp_questions.js";

const sum2 = (a, b) => {
  console.log("Calculating...");
  return a + b;
};

const under21 = (value) => value < 21;

addTiming(sum2)(10, 2);
console.log(negate(under21)(23));
