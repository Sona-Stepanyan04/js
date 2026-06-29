// Given a number, for example:
//
// 123789
// Remove all odd digits from this number. In our case, the result is:
//
//     28
let str = '123789';
let result = str.split('')
    .filter(num => num % 2 === 0)
    .join('');
console.log(result)