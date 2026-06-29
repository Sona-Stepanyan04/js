//Given a string, if the string contains more than one character, print the second-to-last character of the string to the console.


//one
const str = "today is very cold!";

if (str.length > 1) {
    let x = str.length - 2;
    console.log(str.at(x));
}


//two
function character(strr) {
    if (strr.length > 1) {
        return strr.at(-2);
    }
}

console.log(character("today is"));