// Given an array:
//
//     [
//         [2, 1, 4, 3, 5],
//         [3, 5, 2, 4, 1],
//         [4, 3, 1, 5, 2],
//     ]
// Sort the elements in each subarray.
let arr = [
    [2, 1, 4, 3, 5],
    [3, 5, 2, 4, 1],
    [4, 3, 1, 5, 2],
]
let first = 0;
let second = 0;
for (let i = 0; i < arr.length; i++) {
    for (let k = 0; k < arr[i].length; k++) {
        for (let j = 1; j <= arr[i].length; j++) {
            if (arr[i][j - 1] > arr[i][j]) {
                second = arr[i][j];
                first = arr[i][j - 1];
                arr[i][j] = first;
                arr[i][j - 1] = second;
            }
        }
    }
}

let result = arr.map(subArr => subArr.sort((a, b) => a - b));
console.log(arr)