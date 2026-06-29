//Given a string of words, sort the words in alphabetical order.
let text = "խնձոր տանձ Բանան կեռաս ելակ";
let sortText = text.split(' ').sort((a,b) =>  a.localeCompare(b)).join(' ');
console.log(sortText)