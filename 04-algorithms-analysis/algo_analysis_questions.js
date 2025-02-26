//? 1. How fast did you say
//* An analyst has just completed a study of a new algorithm and concludes that its running time,
//* depending on its input size n, is exactly 17n log n – 2n2 + 48. What do you say about that result?

// For large enough n, f(n) becomes negative. Which is imposible

//? 2. Weird bound?
//* Is it valid to say that n is O(n^2)? What about o(n^2)? Other orders?

// Both are correct, but o(n^2) is more precise, because n^2 grows faster. The lower bound orders do not
// apply in this case

//? 3. Of Big Os and Omegas
//* What can you deduce if a certain function is both f(n) = O(g(n)) and f(n) = BigOmega(g(n))?

// In only this case, f(n) = BigTheta(g(n))

//? 4. Transivity?
//* If f(n) = O(g(n)) and g(n) = O(h(n)), how are f(n) and h(n) related? What if instead of big O,
//* you were looking at other orders: small o, big theta, and so on?

// f(n) = O(h(n)) -> since both f and h, and g and h grow proportionally
// It applies to all orders

//? 5. A bit of reflection
//* It seems clear that for any function f(n), you have f(n) = Θ(f(n)). What would you say if working
//* with other orders instead of big theta?

// It would be the same for the Big notations on both boundries -> f(n) = O(f(n)) | f(n) = BigOmega(f(n))
// Since the Big Theta boundry is smaller or bigger, it doe snot apply with the small omega or o

//? 6. Going at it backward
//* If f(n) = O(g(n)), what is the order of g(n) relative to f(n)? What if f(n) = o(g(n))?

// g(n) = BigOmega(f(n))
// g(n) = SmallOmega(f(n))

//? 7. One after the other
//* Suppose you have a process that consists of two steps: the first is an O(n log n) algorithm
//* and the second is an O(n2) algorithm. What’s the order of the whole process? Can you give a
//* general rule?

// For big enough n, we would consider the worst case scenario, and that would be O(n^2)

//? 8. Loop the loop
//* A different but related question: suppose your process consists of an O(n) loop that does an
//* O(n^2) process at each step. What’s the order of the whole? Again, can you provide a general rule?

// This would be the product of the loop and the process, so a triple loop -> O(n^3)

//? 10. It Was the Best of Times; It Was the Worst of Times
//* What happens if the best-case running time of an algorithm is Ω(f(n)) and the worst case is O(f(n))?

// f(n) = BigTheta(f(n)) -> Because it has both boundries
