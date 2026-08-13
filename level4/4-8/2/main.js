//Add a function that takes an array as a parameter and returns an array consisting of N random elements from that array.
function getRandomElementsWithDuplicates(arr, n) {
    if (!Array.isArray(arr) || arr.length === 0 || typeof n !== 'number' || n <= 0) {
        return [];
    }

    let newArr = [];
    for (let i = 0; i < n; i++) {
        newArr.push(arr[Math.floor(Math.random() * arr.length)]);
    }
    return newArr;
}

console.log(getRandomElementsWithDuplicates([1, 2, 3, 4, 5, 6], 3));