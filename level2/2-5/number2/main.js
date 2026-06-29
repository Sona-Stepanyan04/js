// Given a string:
//
//     'abcdefg'
// Remove every third character from this string. In our case, the result should look like this:
//
// 'abdeg'
let str = 'abcdefg';
let arr = str.split("")
    .filter((char,index) => (index + 1) % 3 !== 0)
    .join("")
console.log(arr);