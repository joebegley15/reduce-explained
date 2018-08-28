const arr = [1,2,3,5,4];

// Sum using reduce

// Arr - the array
// Acc - the accumulator
// Element - Elements of the array. Reduce auto-iterates through the array.
// => updates the value of acc to whatever this returns after each element is iterated
// Accumulator gets as we iterate
console.log(arr.reduce((acc,element) => acc + element));
// Product using reduce
console.log(arr.reduce((acc,element) => acc * element));
// Greatest using reduce
console.log(arr.reduce((currentGreatest,element) => element > currentGreatest ? element : currentGreatest));
