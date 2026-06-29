//Given a word, get its last letter. If the word ends in a soft sign, get the second-to-last letter.

const word = "словаь";

let letter = word.length - 1;

let result = word.at(letter);

if (result == "ь") {
    letter = word.length - 2;
    result = word.at(letter);
    console.log(result);
} else {
    console.log(result);
}