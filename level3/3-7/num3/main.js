//Given two numbers, get an array of common divisors of these numbers.
let num1 = 15;
let num2 = 12;
let arr = [];
let min = Math.min(num1, num2);

for (let i = 1; i <= min; i++) {
    if (num1 % i === 0 && num2 % i === 0) {
        arr.push(i);
    }
}

console.log(arr);