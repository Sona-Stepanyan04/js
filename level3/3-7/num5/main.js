//A list of numbers separated by commas is provided. Find the maximum of these numbers.
let str = '5, 12, 3, 19, 8'
let num = str.split(', ').map(Number)
let max = Math.max(...num)

console.log(max)