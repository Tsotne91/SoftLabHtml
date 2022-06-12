const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
numbers.filter(num => num%2===1)
    .map(num => Math.pow(num, 2))
    .forEach(num => console.log(num));
