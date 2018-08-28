const arr = [1,2,3,5,4]

// Sum using reduce
console.log(arr.reduce((acc,elem) => acc + elem));
// Product using reduce
console.log(arr.reduce((acc,elem) => acc * elem));
// Greatest using reduce
console.log(arr.reduce((acc,elem) => elem > acc ? elem : acc));
