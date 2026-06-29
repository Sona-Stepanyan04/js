// Given a word:
//
//     'abcba'
// Check that this word is read the same way from either side.

let str = 'abcba';
let end = str.split('').reverse().join('');
if (str === end) {
    console.log('yes');
} else {
 console.log('no');
}