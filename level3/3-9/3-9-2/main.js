//You are given a string. Check whether the string consists only of even digits.
let str = 'Adfg2s4d6f8';

let isOnlyEvenDigits = str.split('').every(ch => {

    return ch !== ' ' && !isNaN(ch) && Number(ch) % 2 === 0;
});

console.log(isOnlyEvenDigits);