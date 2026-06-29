let str = prompt();
let str2 = ' '
let str1 = str;
let num = 0;

for (let i = 0; i < str.length; i++) {
    if (str.includes('a1b')) {
        str2 += 'a1b';
    }
}

for (let j = 0; j < str2.length; j++) {
    if (str2[j] == 'a') {
        num += 1;
    }
}

if (num == 1) {
    str1 = str1.repeat(3);
} else {
    str1 = str1.indexOf('a1b');
}


alert(str1);

