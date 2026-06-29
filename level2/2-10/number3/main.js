// Given a string:
//
//     'abcde abcde abcde'
// Replace the first character of each word with '!':
//
// '!bcde !bcde !bcde'
let str = 'abcde abcde abcde';
let arr = str.split(' ').map(word => '!' + word.slice(1));
console.log(arr);