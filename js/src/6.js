const numbers = [-2, 0, 6, 3, -11, 4, -5, 10, 11, -1, 7, 9];
console.log(numbers.filter(num => num!==0)
       .map(num => Math.abs(num))
       .reduce((total, value) => total*value, 1))
