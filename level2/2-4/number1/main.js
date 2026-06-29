//Given a string of letters and numbers, get the position of the first digit in this string.
let str = "asdffghj8egy7us56a";
// str = str.split("");
// let index = -1;
// for (let i = 0; i < str.length; i++) {
//     index = i;
//     if (str[i] >= "0" && str[i] <= "9") {
//         index = i;
//         break;
//     }
// }
let index = str.search(/\d/);
console.log(index);