//You are given an array of numbers. Remove from it any numbers that contain two or more zeros.
const numbers = [102, 1002, 50, 400, 7, 20304, 1000, 909]
let res = numbers.filter(num => !/0.*0/.test(num.toString()))

console.log(res)