//Create a function that takes an array as a parameter and removes adjacent duplicate elements from it.
function removesAdjacentDuplicates(arr) {

    return arr.filter((item, index) => item !== arr[index - 1]);
}

console.log(removesAdjacentDuplicates([1, 2, 2, 3, 4, 5]));