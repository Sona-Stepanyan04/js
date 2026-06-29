let str1 = prompt();
let str2 = ' ';

for (let i = str1.length - 1; i >= 0; i--) {
    str2 += str1[i];
}

alert(str2);