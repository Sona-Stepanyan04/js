let str = prompt();

if (str.includes('aaa') == false) {
    str = str.padEnd(str.length + 3, 'A');
}

alert(str);