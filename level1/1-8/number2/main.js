//Fill the array with even numbers from 1 to 100.

const arr = [];

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        arr.push(i);
    }
}
console.log(arr);