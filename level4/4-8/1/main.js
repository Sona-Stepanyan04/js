//Create a function that takes an array as a parameter and returns a random element from that array.
function getRandomElement(arr) {
    if (!Array.isArray(arr) || arr.length === 0) return undefined;
    return arr[Math.floor(Math.random() * arr.length)];
}

console.log(getRandomElement([1, 2, 3, 4, 5, 6]));