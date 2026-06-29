//Given an array, for example, this one:
//
// [1, 2, 3, 4, 5, 6]
// Swap pairs of elements in this array:
//
// [2, 1, 4, 3, 6, 5]

let arr = [1, 2, 3, 4, 5, 6];
for (let j = 0; j < arr.length - 1; j += 2) {
    // let temp = arr[j];
    // arr[j] = arr[j + 1];
    // arr[j + 1] = temp;
    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
}
console.log(arr);