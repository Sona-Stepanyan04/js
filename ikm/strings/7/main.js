let str = prompt();

if (str.startsWith('00')) {
    str = str.replaceAll('ab', '');
} else {
    str = str.padEnd(str.length + 3, 'A');
}

alert(str);