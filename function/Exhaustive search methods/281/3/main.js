//You are given an array of strings. Use the `map` method to reverse the characters of each string.
let str =  ['str', 'str']
let res = str.map(item => item.split('').reverse().join(''))
console.log(res)