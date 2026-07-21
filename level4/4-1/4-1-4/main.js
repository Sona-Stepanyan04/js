//Create a function that takes a number and a string as parameters and truncates the string to the length specified by the first parameter.
function truncatesTheStringToTheLength(length, string) {
    return string.slice(0, length) + '...';
}

console.log(truncatesTheStringToTheLength(5, '12345678910'));