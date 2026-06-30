
// Given the array:
//
//     [
//         [1, 2, 3],
//         [4, 5, 6],
//         [7, 8, 9],
//     ]
// Flatten the elements of this array into a single one-dimensional array:
//
//     [1, 2, 3, 4, 5, 6, 7, 8, 9]

let arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
]
let result = arr.flat(Infinity);
console.log(result)

let newArr = []
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        newArr.push(arr[i][j]);
    }
}
console.log(newArr)