const digitize = (n) => ('' + n).split('').map(Number).reverse();


console.log(digitize(35231),[1,3,2,5,3]);