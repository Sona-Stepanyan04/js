//Given an array of numbers, find the sum of the squares of the elements of this array.

const arr = [1, 2, 3, 4];

const result = arr.reduce((sum, num) => sum + num ** 2, 0);

console.log(result); 
