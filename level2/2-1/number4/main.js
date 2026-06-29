
// Given an array, for example, this one:
//
//     [1, 2, 3, 4, 5, 6]
// Find the sum of the first half of the elements in this array.

const arr = [8,1,2,3,4,5,6];
let half = Math.floor(arr.length / 2);
let sum = arr.slice(0, half).reduce((acc, cur) => acc + cur,0);
console.log(sum);