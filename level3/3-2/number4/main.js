// Given a string containing the words:
//
//     'aaa bbb ccc eee fff'
// Remove every other word from this string. In our case, the result should be:
//
//     'aaa ccc fff'
let str = 'aaa bbb ccc eee fff';
let result = str.split(' ').filter((_, idx) => (idx + 1) % 2 !== 0).join(' ');
console.log(result);