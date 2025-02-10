//? 1.  Pure or impure?
//* Consider the following function that calculates the circumference of a circle given its radius
//* but accesses a global variable to do it. Is it pure or impure?

const PI = 3.14159265358979;
const circumference = (r) => 2 * PI * r;

/*
*   From the FP view, it is considered an impure function because it is using a variable that is not
*   provided as an argument

*   The best way would be to use the Math.PI method, so there is no external manipulation of the data
 */

//? 2.  Prepare for failure
//* The addLogging() function doesn’t take into account the possibility of the original function throwing
//* an exception. Can you modify it to produce proper results in that case as well?

export const addLoggingwithException =
  (fn) =>
  (...args) => {
    console.log("High-order functionality");
    console.log("Entering ", fn.name, " with ", ...args);

    try {
      const toReturn = fn(...args);
      console.log(`Exiting ${fn.name} returning ${toReturn}`);
      return toReturn;
    } catch (error) {
      console.log(`Exception in ${fn.name}: ${error}`);
      throw error;
    }
  };

//? 3. You got time?
//* Write an addTiming() higher-order function that will take a function as a parameter and produce
//* an equivalent new function, but will log timing data on the console. The kind of solution you want
//* is along the lines of the addLogging() function mentioned in this chapter; take care to account for
//* exceptions as well.

import { performance } from "perf_hooks";

export const addTiming =
  (fn) =>
  (...args) => {
    console.log("Log with time");

    const output = (text, name, tStart, tEnd) => {
      console.log(`${name} - ${text} - Time: ${tEnd - tStart} ms`);
    };

    const tStart = performance.now();

    try {
      const toReturn = fn(...args);
      output("normal exit", fn.name, tStart, performance.now());
      return toReturn;
    } catch (error) {
      output("exception thrown", fn.name, tStart, performance.now());
      throw error;
    }
  };

//? 4. Parsing problem
//* If you attempt to do ["1", "2", "4", "8", "16", "32"].map(parseInt), a weird [1, NaN, NaN, NaN, 1, 17]
//* result is produced; can you explain why? Hint: check what parameters are passed by map() to your function.

/*
* The problem is that .map() passes three arguments to your mapping function: the current element of the
* array, its index, and the whole array.

* On the other hand, parseInt() receives two parameters: the value to parse and an optional radix
* (10 is the default value if nothing is passed). In this case, parseInt() is getting passed three
* arguments: it ignores the third extra one, but it uses the array index as the radix. For instance,"8"
* is parsed as a base 3 number, producing an error, since base 3 uses only digits 0, 1, and 2, and "32"
* is parsed as a base 5 number, which is equivalent to 17.
*/

//? 5. Deny everything
//* Write a negate() higher-order function that, given a predicate, will produce a complementary predicate
//* that returns the opposite result. For example, if you had an isAdult() function that checked whether
//* its argument was 21 or more, negate(isAdult) would check whether its argument was not 21 or more.
//* (Tip: you may find this function useful for the next two questions.)

export const negate =
  (fn) =>
  (...args) =>
    !fn(...args);
