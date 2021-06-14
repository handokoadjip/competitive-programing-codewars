const countPositivesSumNegatives = (input) => input && input.length ? [input.filter(p => p > 0).length, input.filter(n => n < 0).reduce((a, b) => a + b, 0)] : [];


let testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
let actual = countPositivesSumNegatives(testData);
console.log(actual, [10, -65]);