//
// Given a string in this format:
//
//     'kebab-case'
// Convert it to this format:
//
//     'snake_case'
let kebabStr = 'user-profile-settings';
let snakeStr = kebabStr.replaceAll('-','_');
console.log(snakeStr);