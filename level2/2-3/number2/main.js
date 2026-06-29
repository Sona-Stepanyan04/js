//Given a string, find the position of the third zero in the string.
const str = "Hello 0  0 World!dfgds0";
let first = str.indexOf("0");
let second = str.indexOf("0",first + 1);
let third = str.indexOf("0",second + 1);
console.log(third);