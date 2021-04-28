const squareSum = numbers => numbers.map(number => number**2).reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(squareSum([1,2]), 5)
console.log(squareSum([0, 3, 4, 5]), 50)