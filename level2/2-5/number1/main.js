
// Given a string, for example, this:
//
// '023m0df0dfg0'
// Get an array of the positions of all zeros in this string.
let str = '023m0df0dfg0';
// let result = [];
// let arr = str.split('');
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === '0') {
//         result.push(i);
//     }
// }
// console.log(result);
//-----------------------------------------------------------
let positions = str.split('').reduce((acc, char,index) => {
    if (char === '0') {
        acc.push(index);
    }
    return acc;
},[]);
console.log(positions);