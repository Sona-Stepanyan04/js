//Given a number, print the number of even digits in this number to the console
let number = 12532640;
// let current = 0;
// let str = number.toString()
//     .split("")
//
// for (let i = 0; i < str.length; i++) {
//     if (Number(str[i]) % 2 === 0) {
//         current++;
//     }
// }

let current = number.toString().split('')
    .filter(digit => digit % 2 === 0).length;
console.log(current);