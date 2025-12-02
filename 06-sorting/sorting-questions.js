//? 1. Forced reversal
//* Suppose you want to order a set of numbers in descending order, but you have a sorting
//* function that sorts only in ascending order with no options whatsoever to change how it
//* works. How can you manage to sort your data as you wish?

/*
 *  First you change the sign of all the elements of the array.
 *  [10, ,5 15, 6] becomes [-10, -5, -15, -6] then you sort them [-15, -10, -6, -5]
 *  and then you change the sign again [15, 10, 6, 5]
 */

//? 2. Only lower
//* Suppose you had a boolean function lower(a,b) that returns true if a is lower in sorting
//* order than b and false otherwise. How can you use it to decide whether a is higher in
//* sorting order than b? And how can you use it to see whether both keys are equal in order?

// const higher = (a, b) => lower(b, a);
// const equal = (a, b) => !lower(a, b) && !higher(a, b);

//? 3. Testing a sort algorithm
//* Imagine you’re trying out a new sorting algorithm of your own. How would you test that
//* it actually sorted correctly?
/*
 * 1. Sort a copy of the data with a proven sorting algorithm and use JSON.stringify(data)
 * 2. Sort the data with your algorithm and apply the same stringify method to it
 * 3. If they are identical the algorithm sorted the data correctly
 */

//? 4. Missing ID
//* Imagine you got a set of six-digit IDs, but the count is under 1,000,000, so at least
//* one ID is missing. How can you find one?
