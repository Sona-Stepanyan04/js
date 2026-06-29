//A string is given. Check that this string consists only of digits.
let str = '15369874';
let isOnlyDigits = /^\d+$/.test(str);
console.log(isOnlyDigits)