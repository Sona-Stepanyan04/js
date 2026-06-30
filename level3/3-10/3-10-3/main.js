//You are given two numbers. Obtain an array of digits that appear in both numbers.
let numOne = 1567
let numTwo = 894357

let arr1 = numOne.toString().split('')
let arr2 = numTwo.toString().split('')

let result = arr1.filter(digit => arr2.includes(digit))
console.log(result);