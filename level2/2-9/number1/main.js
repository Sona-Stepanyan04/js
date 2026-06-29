
// Given a number:
//
//     123456
// Find the sum of the pairs of digits of this number. In our case, this means the following:
//
//     12 + 34 + 56
let num = 123456;
let sum = String(num).split('').reduce((acc, curr, idx, arr) => {
    if (idx % 2 === 0) {
        acc += Number(curr + arr[idx + 1]);
    }
    return acc;
}, 0);
console.log(sum);