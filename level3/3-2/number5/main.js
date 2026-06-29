// Given an array:
//
//     [
//         [1, 2, 3],
//         [4, 5, 6],
//         [7, 8, 9],
//     ]
// Find the sum of the elements of this array.
let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
// let result = arr.reduce((acc, arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         acc += arr[i];
//     }
//     return acc;
// }, 0)
let result = arr.flat().reduce((acc, num) => acc + num, 0);
console.log(result);