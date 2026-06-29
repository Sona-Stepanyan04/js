// You are given an array of numbers:
//
//     [1, 2, 3, 3, 4, 5]
// Check that this array contains two identical elements in a row.
let arr = [1, 2, 3, 3, 4, 4, 5];
for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) {
        console.log(`yes this num is ${arr[i]}`);
    }
}