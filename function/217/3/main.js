//Create a function that takes a number as a parameter and returns the sum of its digits.
function sumDigitsNum(num) {
    let sum = num.toString().split('').flatMap(i => 0 + Number(i))


    return sum
}
console.log(sumDigitsNum(12))