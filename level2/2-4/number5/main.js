// Given a string containing the words:
//
//     'aaa bbb ccc'
// Capitalize the first character of each word in this string. In our case, the result should look like this:
//
// 'Aaa Bbb Ccc'

let str = "aaa bbb ccc";
// let str2 = str.split(" ");
// let result = "";
// console.log(str2);
// for (let i = 0; i < str2.length; i++) {//i = 0 aaa, i = 1 bbb, i = 2 ccc
//     for (let j = 0; j < str2[i].length; j++) {
//         if (j === 0) {
//             result += str2[i][j].toUpperCase()
//         } else {
//             result += str2[i][j]
//         }
//     }
//     result += " ";
// }
// console.log(result.trim());

let result = str.split(" ")
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(" ");

console.log(result);