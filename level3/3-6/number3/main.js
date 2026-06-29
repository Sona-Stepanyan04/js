// Given an array, for example, this one:
//
//     [123, 456, 789]
// Merge all the elements of this array into a single array, splitting them character by character:
//
//     [1, 2, 3, 4, 5, 6, 7, 8, 9]
let arr = [123, 456, 789]
let newArr = Array.from(arr.join(''), Number);
console.log(newArr)