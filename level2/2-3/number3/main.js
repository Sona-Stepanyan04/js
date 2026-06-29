// The following numbers are separated by commas:
//
//     '12,34,56'
// Find the sum of these numbers.
let str = "12,34,56";
let arr = str.split(",");

let sum = arr.reduce((acc,cur) => acc + Number(cur),0);
console.log(sum);