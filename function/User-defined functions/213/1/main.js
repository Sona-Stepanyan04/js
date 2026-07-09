//Create a function that takes an array of numbers as a parameter and checks whether all elements in the array are even numbers.
function evenNumbers(arr) {
    let flag = true
    for (let el of arr) {
        if (el % 2 !== 0) {
            flag = false
            break
        }
    }
    return flag
}
console.log(evenNumbers([2,4,6,8]))