//Remove words from the array of words that are more than three characters long.

let arrstr = ['hello', 'world', 'world!', 'I am', 'Son'];
let result = arrstr.filter(i => i.length <= 3);
console.log(result);