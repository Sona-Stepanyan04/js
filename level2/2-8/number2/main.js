
// Given a string:
//
//     '1 22 333 4444 22 5555 1'
// Remove all substrings from this string that contain more than three characters. In our case, the result should look like this:
//
// '1 22 333 22 1'
let str = '1 22 333 4444 22 5555 1';
let result = str.split(' ')
    .filter(x => x.length <= 3)
    .join(' ');
console.log(result);