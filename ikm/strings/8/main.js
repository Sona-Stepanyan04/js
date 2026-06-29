let str = prompt();

if (str.includes('ABC')) {
    str = str.replaceAll('1', '*');
}

alert(str);