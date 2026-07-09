//Create a function that takes a number as a parameter and checks whether all of its digits are odd.
function digitOdd(a) {
    return a.toString().split('').every(el => Number(el) % 2 !== 0);
}

console.log(digitOdd(121))