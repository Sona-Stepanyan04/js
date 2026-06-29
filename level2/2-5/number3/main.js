// Given an array, for example, this one:
//
//     [1, 2, 3, 4, 5, 6]
// Divide the sum of the elements in even positions by the sum of the elements in odd positions.
let arr = [1, 2, 3, 4, 5, 6];

let sums = arr.reduce((acc, el, index) => {
    if (index % 2 === 0) {
        acc.even += el;
    } else {
        acc.odd += el;
    }
    return acc;
}, {even: 0, odd: 0});

let result = sums.even / sums.odd;
console.log(result);