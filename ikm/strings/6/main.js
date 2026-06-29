let str = prompt();

if (str.endsWith('00')){
    str = str.replace('010', '');
}

alert(str);