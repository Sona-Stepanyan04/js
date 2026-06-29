// Given a string:
//
//     'AbCdE'
// Reverse the case of the letters in this string. In our case, the result should look like this:
//
// 'aBcDe'
let str = 'AbCdE';
let result = str.split("").map(char => {
    if (char === char.toUpperCase()) {
        return char.toLowerCase();
    } else {
        return char.toUpperCase();
    }

}).join("");
console.log(result);