let str = prompt();

str = str.trimStart();
str = str.toLowerCase();

let str_lgh = Math.floor(str.length / 2);

str = str.slice(str_lgh);

alert(str);