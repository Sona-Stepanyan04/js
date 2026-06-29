//Given an array of numbers, keep only those numbers that are divisible by 5.

let numbers = [12, 25, 0, 44, 55, -10, 1, 105, 98];
let result = numbers.reduce((acc, num) => {
    if (num % 5 === 0) {
        acc.push(num);
    }
    return acc;
}, [])
console.log(result);