//Create a function that fills an array with N random numbers from a given range.
function getRandomInt(n, min, max) {
    let arr = []
    for(let i = 0; i < n; i++) {
        arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return arr;
}

console.log(getRandomInt(5, 10,95));
