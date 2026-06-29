//Given an array of numbers, check that it contains a number containing the digit 3.

let numbers = [12, 85, 403, -76, 99, 14, 532];
console.log(numbers.some((num) => String(num).includes('3')))