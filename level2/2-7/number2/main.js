// Given a symbol, find out whether this symbol is uppercase or lowercase.
let char = '0';
if (char.toUpperCase() === char.toLowerCase()) {
    console.log(`${char} is not a letter`);
} else if (char === char.toUpperCase()) {
    console.log(`${char} is to uppercase`);
} else {
    console.log(`${char} is to lowercase`);
}
