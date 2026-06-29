
// Given two arrays:
//
//     let arr1 = [1, 2, 3];
// let arr2 = [1, 2, 3, 4, 5];
// Remove the extra elements from the end of the larger array so that the lengths of the arrays are the same.
let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3, 4, 5];

let result = arr2.slice(0, arr1.length)
console.log(result);