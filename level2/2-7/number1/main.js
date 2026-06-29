// Given a string:
//
//     'a bc def ghij'
// Convert all substrings with less than or equal to three letters to uppercase. In our case, the result should be:
//
//     'A BC DEF ghij'
let str = 'a bc def ghij';
let arr = str.split(' ')
    .map(word => word.length <= 3 ? word.toUpperCase() : word)
    .join(' ');
console.log(arr);