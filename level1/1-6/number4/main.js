//Given an array of numbers, find the sum of those elements of this array that are greater than zero and less than ten.

const arr = [0,-1,2,-5,6,-3,8,10,15,-4,9];
const positiveArr = arr.filter(num => num > 0 && num < 10);
const result = positiveArr.reduce((sum, num) => sum + num, 0);
console.log(result);
