//You are given a string. Capitalize the last letter of each word in the string.
let str = 'Hello World'
let result = str.split(' ').map(word => {
    return word.slice(0, -1) + word.at(-1).toUpperCase() + ' ';
}).join('').trimEnd()
console.log(result)