//Create a function that takes an array of numbers as a parameter and returns the maximum and minimum values ​​from that array as the following object:
//
// {
// max: 9,
// min: 1,
// }

function getMaxAndMinValues(arr) {
    let obj = {}

    obj.max = Math.max(...arr)
    obj.min = Math.min(...arr)

    return obj;
}

console.log(getMaxAndMinValues([1, 2, 3, 4]));