// /You are given an array of numbers. Check whether the product of each element's value and its index is less than 30.
let arrNum = [1, 2, [3, 4], 5, [6, 7]]
let res = arrNum.every((num, idx) => idx < 30)
console.log(res)