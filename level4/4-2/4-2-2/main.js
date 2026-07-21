//Create a function that takes a number as a parameter and removes the zeros from it.
function removesZeros(numbers) {
    return Number(numbers.toString()
        .split('')
        .filter(x => x !== '0')
        .join(''))
}
console.log(removesZeros(-150456));