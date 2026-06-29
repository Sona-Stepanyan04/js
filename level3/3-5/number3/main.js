//Given an array of numbers, keep only those numbers that contain the digit zero.
let numbers = [102, 5, 40, -305, 7001, 89, 0, 56];
let result = numbers.filter(num => String(num).includes('0'));
console.log(result);