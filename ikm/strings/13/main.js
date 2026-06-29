let str = prompt();
let str1 = "";

str = str.split(' ');

for (let i = str.length - 1; i >= 0; i--) {
    str1 += str[i];
    if (i > 0) {
        str1 += " "; 
    }
}

alert(str1);