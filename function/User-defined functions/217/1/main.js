//Create a function that takes a number as a parameter and returns an array of its divisors.
function divisorsArr(num) {
    let arr = []
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            arr.push(i)
        }
    }
    return arr
}
console.log(divisorsArr(12))