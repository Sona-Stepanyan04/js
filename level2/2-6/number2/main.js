// Given an array of numbers, for example, this one:
//
//     [123, 456, 789]
// Write code that will reverse the numbers in this array according to the following principle:
//
//     [321, 654, 987]
let arr =  [123, 456, 789];
let result = arr.map(num => {
    return Number(String(num).split('').reverse().join(''));
})
console.log(result);