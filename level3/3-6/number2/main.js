//
// Given a number, for example, this:
//
// let num = 12345;
// Check that all digits of this number are greater than zero.
let num = 12345

let isAllGreaterZero = /^[1-9]+$/.test(Math.abs(num));
console.log(isAllGreaterZero)