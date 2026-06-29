// Given an array:
//
//     [1, '', 2, 3, '', 5]
// Remove all empty strings from the array.
let arr = [1, '', 2, 3, '', 5];

let result = arr.reduce((acc, item, ) => {
    if (item !== '') {
        acc.push(item);
    }
    return acc;
}, []);

console.log(result)