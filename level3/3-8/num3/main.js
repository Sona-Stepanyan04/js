// Given a string in the format:
//
//     'snake_case'
// Convert it to the format:
//
//     'camelCase'

let snakeStr = 'user_profile_settings';
let camelStr = snakeStr.replace(/_([a-z])/g, (match, letter) => letter.toUpperCase())
console.log(camelStr)