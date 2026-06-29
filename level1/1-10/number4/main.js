// Given two arrays:
//
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// Merge these arrays into a new array:
//
// [1, 2, 3, 4, 5, 6]

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let newArr= arr1.concat(arr2);
let newArr2 = [...arr1,...arr2];
console.log(newArr,newArr2);