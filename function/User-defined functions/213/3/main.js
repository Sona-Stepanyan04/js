//Create a function that takes an array as a parameter and checks whether the array contains two identical consecutive elements.
function checks(arr) {
    return arr.some((num, i) => num === arr[i + 1])
}

console.log(checks([1, 2, 3, 4, 5, 6, 7]))