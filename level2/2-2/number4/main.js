
// Given an array, for example, this one:
//
//     [1, 2, 3, 4, 5, 6]
// Divide the sum of the first half of the elements in this array by the sum of the second half of the elements.

let arr = [1,2,3,4,5,6];

//------------------------------------------------------------
//------------------------------------------------------------

// let sumOne = 0;
// let sumTwo = 0;
// const first = Math.floor(arr.length / 2);
// for (let i = 0; i < first; i++) {
//     sumOne += arr[i];
// }
// console.log(sumOne);
//
// for (let j = first; j <arr.length; j++) {
//     sumTwo += arr[j];
// }
// console.log(sumTwo);
//
// const result = sumOne / sumTwo;
// console.log(result);

//---------------------------------------------------------------
//---------------------------------------------------------------
const middle = Math.floor(arr.length / 2);
let sumOne = arr.slice(0,middle).reduce((acc, cur) => acc + cur, 0);
let sumTwo = arr.slice(middle).reduce((acc, cur) => acc + cur, 0);
const result = sumOne / sumTwo;
console.log(result);