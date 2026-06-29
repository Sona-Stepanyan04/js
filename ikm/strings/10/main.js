let str = prompt();

if (str.includes('aaa') == false) {
    str = str.padStart(str.length + 3, 'A');
}

alert(str);