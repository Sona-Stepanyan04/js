//Given a number, get the first even digit from the end of this number.
let num = 125896345699999;
// let arr = [...String(num)];
// for (let i = arr.length - 1; i >= 0; i--) {
//     if (Number(arr[i]) % 2 === 0) {
//         console.log(arr[i]);
//         break;
//     }
// }
let firstEvenFromEnd = [...String(num)].findLast(digit => Number(digit) % 2 === 0);
console.log(firstEvenFromEnd);