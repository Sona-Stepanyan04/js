//
// Given a string:
//
//     'abcde'
// Convert all odd letters in this string to uppercase. In our case, the result should be:
//
//     'AbCdE'
let str = "abcde";
// let str2 = str.split("");
// let str3 = "";
// for (let i = 0; i < str.length; i++) {
//     if (i % 2 === 0){
//         str3 += str2[i].toUpperCase();
//     } else {
//         str3 += str2[i];
//     }
// }
// console.log(str3);
let result = str.split("")
    .map((char,i) => i % 2 === 0 ? char.toUpperCase() : char.toLowerCase())
    .join("");

console.log(result);