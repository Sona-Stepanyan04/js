//Create a function that takes a number as a parameter and returns the sum of its digits.
function sumOfItsDigits(x) {
    return Math.abs(x)
        .toString()
        .split('')
        .reduce((acc, cur) => acc + Number(cur), 0)
}
console.log(sumOfItsDigits(-3214));