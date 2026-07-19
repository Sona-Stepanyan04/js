//You are given an array of numbers. Using the `map` method, set each element of the array to its value multiplied by its index (position) in the array.
let numArr = [1,2,3,4,5,6]
let res = numArr.map((num,index) => num * index)
console.log(res)