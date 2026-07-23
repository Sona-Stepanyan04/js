//Create a function that takes an array as a parameter and removes all duplicates that appear more than three times.
function removesAllDuplicatesFromArray(arr) {
    let counts = {};

    return arr.filter((item) => {
        counts[item] = (counts[item] || 0) + 1;

        return counts[item] <= 3;
    })
}

console.log(removesAllDuplicatesFromArray([1, 1, 1, 1, 1, 2, 2, 2]));