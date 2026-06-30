//You are given an array and a number. Keep only those numbers in the array that are divisors of the given number.
const num = 24;
let numArr = [2,4,6,12,18,56,89];
let onlyDivisors = numArr.filter((elem) => num % elem === 0);
console.log(onlyDivisors);