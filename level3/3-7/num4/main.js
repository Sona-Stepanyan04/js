//You are given a number. Check whether this number has exactly one divisor other than itself and one.
let x = 16;
let y = Math.sqrt(x)
let arr = [];
let current = 0
for (let i = 1; i <= y; i++) {
    if (y % i === 0) {
        current += 1;
    }
}
if (y % 1 === 0) {
    if (current === 2) {
        for (let i = 1; i <= x; i++) {
            if (x % i === 0) {
                arr.push(i);
            }
        }
    }
}
console.log(arr);