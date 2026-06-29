
// Given an array of numbers, for example, this one:
//
//     [1, 2, 3, 4, 5, 6]
// Merge pairs of elements together:
//
//     [12, 34, 56]
let arr =[1, 2, 3, 4, 5, 6];
let acc = [];

for (let i = 0; i < arr.length; i += 2) {
    let pair = Number(String(arr[i]) + String(arr[i + 1]));
    acc.push(pair);
}
console.log(acc);
