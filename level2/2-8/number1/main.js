//Given a string of letters, check that this string contains no more than two capital letters.
let str = 'ghokSdlojFioH';
//-------------------------------------
//-------------------------------------
//varian 1
//--------------------------------------
// let count = 0;
// for (let char of str) {
//     if (char.toUpperCase() === char.toLowerCase()) {
//         continue
//     } else if (char === char.toUpperCase()) {
//         count++;
//     }
//     if (count > 2) break;
// }
//console.log(count <= 2 ? "yes" : "no");

//---------------------------------------------
//---------------------------------------------
//variant 2
//--------------------------------------------
//--------------------------------------------
let result = str.split('')
    .filter(item => item === item.toUpperCase() && item.toLowerCase() !== item.toUpperCase())


console.log(result.length <= 2 ? "yes" : "no");