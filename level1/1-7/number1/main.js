//Given a string: 'abcde' Get an array of letters from this string.

const str = 'abcde';

//1st way   
// const result = [];
// for (let i = 0; i < str.length; i++) {
//     let char = str.charAt(i);
//     result.push(char);
// }

//2nd way
// const result = str.split('');

//3rd way
const result = [...str];

console.log(result);