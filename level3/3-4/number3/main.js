//Given the following object:
//
// let obj = {
// 1: {
// 1: 11,
// 2: 12,
// 3: 13,
// },
// 2: {
// 1: 21,
// 2: 22,
// 3: 23,
// },
// 3: {
// 1: 24,
// 2: 25,
// 3: 26,
// },
// }
// Find the sum of the elements of this object.

let obj = {
    1: {
        1: 11,
        2: 12,
        3: 13,
    },
    2: {
        1: 21,
        2: 22,
        3: 23,
    },
    3: {
        1: 24,
        2: 25,
        3: 26,
    },
}

let value = Object.values(obj).map(innerObj => Object.values(innerObj));
let sum = value.flat(Infinity).reduce((sum, val) => sum + val, 0)
console.log(sum)