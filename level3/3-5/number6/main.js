
// Write a program that will generate the following string:
//
//     '-1-2-3-4-5-'

let n = '5'
let str = '';
for (let i = 1; i <= n; i++) {
    str += '-' + i;
};
str += '-';

let str1 = '-' + Array.from({length: n}, (_, i) => i +1).join('-') + '-';
console.log(str1);
console.log(str);