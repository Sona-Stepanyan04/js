//Given a text with words, write all words beginning with the letter 'a' into an array.

let text = "An apple a day keeps the doctor away. Alice always asks about ancient artifacts in Egypt.";
let cleanWord = text.replace(/[^a-zA-Z]/g,' ')
let arr = cleanWord.split(' ').filter(x => x[0] && x[0].toLowerCase() === 'a');
console.log(arr);