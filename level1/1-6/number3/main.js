//Given an array of numbers, find the sum of the positive elements of this array.

const arr = [1,-2,3,-4,5,-6];
const positiveArr = arr.filter(num => num > 0);
console.log(positiveArr); // [1, 3, 5]

const result = positiveArr.reduce((sum, num) => sum + num, 0);
console.log(result); // 9
