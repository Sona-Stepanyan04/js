//Create a function that takes two numbers as parameters and returns an array of their common divisors.
function divisorsArr(num) {
    let arr = []
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            arr.push(i)
        }
    }
    return arr
}

function unionDivisors(num1, num2) {
    let arr1 = divisorsArr(num1)
    let arr2 = divisorsArr(num2)

    const union = [...new Set([...arr1, ...arr2])]
    return union.sort((a, b) => a - b)

}
console.log(unionDivisors(15,12))