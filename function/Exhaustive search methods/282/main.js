//You are given an array of numbers. Using the `forEach` method, find the sum of the squares of the array's elements.
let arr = [1,2,3,4,5,6]
let sum = 0
arr.forEach(item => sum += item ** 2)
console.log(sum)