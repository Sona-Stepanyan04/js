//You are given an array of numbers. Using the `map` method, extract the square root of each element and store the result in a new array.
let arr = [1,4,9,16,25,36,49,64,81]
let res = arr.map(item => item ** 0.5)
console.log(res)