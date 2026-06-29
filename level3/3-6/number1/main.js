//Given an array of numbers, remove numbers from it that have more than three digits.
let arr = [1,23,5698,4569,5,6,45,56,869]
console.log(arr)
let newArr = arr.filter(n => n < 1000)
console.log(newArr)