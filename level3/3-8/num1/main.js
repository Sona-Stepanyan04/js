// You are given an array of numbers. Check whether all the numbers in the array contain the digit 3.
let numArr = [3,13,63,39,393]
let result = numArr.every(item => item.toString().includes('3'))
console.log(result)