//Given a number: 12345 Get an array of digits of this number.
const number = 12345;

const arr = String(number).split('').map(Number);
console.log(arr); // [1, 2, 3, 4, 5]