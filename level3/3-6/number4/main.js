// Given the following structure:
//
//     let data = [
//         {
//             1: 11,
//             2: 12,
//             3: 13,
//         },
//         {
//             1: 21,
//             2: 22,
//             3: 23,
//         },
//         {
//             1: 24,
//             2: 25,
//             3: 26,
//         },
//     ];
// Find the sum of the elements of this structure.
    let data = [
        {
            1: 11,
            2: 12,
            3: 13,
        },
        {
            1: 21,
            2: 22,
            3: 23,
        },
        {
            1: 24,
            2: 25,
            3: 26,
        },
    ];

// let sum = 0;
// for (let i = 0; i < data.length; i++) {
//     let num = Object.values(data[i]);
//     for (let j = 0; j < num.length; j++) {
//         sum += num[j];
//     }
// }
// console.log(sum)

// let sum = data
//     .flatMap(obj => Object.values(obj))
//     .reduce((acc, curr) => acc + curr, 0);
//
// console.log(sum);

let sum = 0;

for (let obj of data) {
    for (let val of Object.values(obj)) {
        sum += val;
    }
}

console.log(sum);
