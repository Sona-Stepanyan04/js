
// Given two arrays:
//
//     let arr1 = [1, 2, 3];
// let arr2 = ['a', 'b', 'c'];
// Merge these arrays into a new array as follows:
//
//     [1, 2, 'a', 'b', 'c', 3]
let arr1 = [1, 2, 3];
let arr2 = ['a', 'b', 'c'];
let result =[...arr1];
result.splice(2, 0, ...arr2);
console.log(result);