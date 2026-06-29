
// Given a number:
//
//     12345
// Print all its characters from the end to the console.

const  number = 12345;
number.toString()
    .split('')
    .reverse()
    .forEach(item => console.log(item));