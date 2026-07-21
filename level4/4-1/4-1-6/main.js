//Create a function that takes a number as a parameter and returns the sum of its divisors.
function getSumOfDivisorsTheNumber(number) {
    let sum = number;
    for (let i = 1; i <= number / 2; i++) {
        if (number % i === 0) {
            sum += i;
        }
    }
    return sum;
}
console.log(getSumOfDivisorsTheNumber(12));