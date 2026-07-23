//Create a function that takes an array as a parameter and removes all duplicates from it.
function removesAllDuplicatesFromArray(arr) {
    return [...new Set(arr)];
}

console.log(removesAllDuplicatesFromArray([1, 2, 3, 4, 5,5,5,4,]))
