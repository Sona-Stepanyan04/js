//Write a function that takes a number as a parameter and divides it by 2 repeatedly until the result is less than 10. The function should return the number of iterations required to reach this result.
function dividesByTwo(num) {
    let iterations = 0

    while(num >= 10) {
        num = num / 2
        iterations++;
    }
    return iterations
}

console.log( dividesByTwo(1000) );