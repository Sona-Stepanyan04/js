//Given an array of numbers, find the sum of the square roots of the elements of this array.

const arr  = [1,4,9,16];
const result = arr.reduce((sum, num) => sum + Math.sqrt(num), 0);
// const result = arr.reduce((sum, num) => sum + num ** 0.5, 0);

console.log(result);