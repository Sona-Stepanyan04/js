//Find the sum of the elements of this structure.

let data = [
    {
        1: [1, 2, 3],
        2: [1, 2, 3],
        3: [1, 2, 3],
    },
    {
        1: [1, 2, 3],
        2: [1, 2, 3],
        3: [1, 2, 3],
    },
    {
        1: [1, 2, 3],
        2: [1, 2, 3],
        3: [1, 2, 3],
    },
];
let arr = []

let sum = data
    .flatMap(obj => Object.values(obj).flat())
    .reduce((a, b) => a + b, 0);
console.log(sum)
