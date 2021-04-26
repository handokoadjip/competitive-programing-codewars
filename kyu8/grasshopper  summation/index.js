const summation = num => {
  let result = 0;

  for(let i = 0; i <= num; i++) {
    result += i;
  }

  return result;
}

console.log(summation(1), 1);
console.log(summation(8), 36);