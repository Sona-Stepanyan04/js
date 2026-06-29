//Given two words, check that the last letter of the first word matches the first letter of the second word.
const str1 = 'Hello World';
const str2 = 'Hello World';

if (str1.at(-1).toLowerCase() == str2.at(0).toLowerCase() ) {
    console.log("yes");
} else {
    console.log("no");
}