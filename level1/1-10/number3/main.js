
// Given an array, for example, this one:
//
//     [1, 2, 3, 4, 5, 6]
// Print the subarrays of two elements of our array one by one to the console:
//
//     [1, 2]
//         [3, 4]
//         [5, 6]

const arr = [1, 2, 3, 4, 5,6];


for (let i = 0; i < arr.length; i += 2) {
    console.log( arr.slice(i, i + 2));
}