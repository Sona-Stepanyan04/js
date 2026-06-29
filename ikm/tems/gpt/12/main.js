let str = "Hello, World! This is a test string.";
str = str.split(" ");

let words = str[0];

str[0] = str[str.length - 1];
str[str.length - 1] = words;

str = str.join(" ");
alert(str);



