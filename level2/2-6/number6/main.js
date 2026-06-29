// Given a string containing the words:
//
//     'aaa bbb ccc eee fff'
// Capitalize the first character of every second word in this string. In our case, the result should look like this:
//
// 'aaa Bbb ccc Eee fff'
let str = 'aaa bbb ccc eee fff';
let result = str.split(' ')
    .map((word, idx) => idx % 2 !== 0 ? word[0].toUpperCase() + word.slice(1) : word)
    .join(' ');
console.log(result);