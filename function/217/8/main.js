//Create a function that takes a number as a parameter and checks whether it is prime.
function checksNumPrime(number) {
    let currentNumber = 0;
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            currentNumber += 1;
        }

        if (currentNumber > 2) {
            return false;
        }
    }
    return true;
}
console.log(checksNumPrime(15));