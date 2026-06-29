//Given a string, iterate over and output to the console each character from the end of the string.

const str = "I am very sad";
let result;

for(let i = str.length ; i >= 0; i--){
    result = str.at(i);
    console.log(result);
}