//Given a string, remove the second to last character from this string.
let str = "Banana";
let result = str.slice(0,-2) + str.slice(-1);
console.log(result);