// Given an array of fractions:

// [1.456, 2.125, 3.32, 4.1, 5.34]
// Round these fractions to one decimal place.


const arr = [1.456, 2.125, 3.32, 4.1, 5.34];

for (let i = 0; i < arr.length; i++) {
    //arr[i] = arr[i].toFixed(1);
    arr[i] = Math.trunc(arr[i] * 10) / 10;
}
console.log(arr);
