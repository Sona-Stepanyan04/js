//Create a function that takes a number as a parameter and returns the sum of its digits.
function sumDigitsNum(num) {
    return num
        .toString()
        .split('')
        .reduce((sum, current) => sum + Number(current), 0);
}
console.log(sumDigitsNum(12))