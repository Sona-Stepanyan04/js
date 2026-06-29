
// Given a string in the format:
//
//     'camelCase'
// Convert it to the format:
//
//     'snake_case'
let camelStr = 'userProfileSettings';
let snakeStr = camelStr.replace(/[A-Z]/g, (match) => '_' + match.toLowerCase())
console.log(snakeStr)