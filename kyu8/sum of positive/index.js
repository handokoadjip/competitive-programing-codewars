const positiveSum = (arr) => arr.reduce((accumulator, currentValue) =>  Math.sign(currentValue) !== -1 ? accumulator + currentValue : accumulator, 0);

console.log(positiveSum([1,2,3,4,5]),15);
console.log(positiveSum([1,-2,3,4,5]),13);
console.log(positiveSum([]),0);
console.log(positiveSum([-1,-2,-3,-4,-5]),0);
console.log(positiveSum([-1,2,3,4,-5]),9);