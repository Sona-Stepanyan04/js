let str = prompt();
let first_str = Math.floor(str.length / 2);
let str1 = str.slice(0,first_str)

if (str1.includes('010')) {
    alert('yes');
} else {
    str = str.toLowerCase();
    str = str.slice(0, str.length - 5);
}

alert(str);