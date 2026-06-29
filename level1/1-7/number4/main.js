//You are given a number: 12345 Find the sum of the digits of this number.

const number  = 12345;
let result = 0;

for(let i = 0; i < number.toString().length; i++) {
    result += parseInt(number.toString()[i]);
}
console.log(result);