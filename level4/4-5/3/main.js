//Create a function that takes an array of numbers as a parameter and returns the second largest number.
function secondNumOfArray(arr) {
    if (!Array.isArray(arr) || arr.length < 2) return undefined;

    let max = -Infinity;
    let secondMax = -Infinity;

    for (let num of arr) {
        if (num > max) {
            secondMax = max;
            max = num;
        } else if (num > secondMax && num < max) {
            secondMax = num;
        }
    }

    return secondMax === -Infinity ? undefined : secondMax;
}

console.log(secondNumOfArray([1, 2, 3, 4, 5, 6]));
console.log(secondNumOfArray([6, 6, 5, 4]));
console.log(secondNumOfArray([5, 5, 5]));