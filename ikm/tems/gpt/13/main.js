let str = "Hello, World! This is a te!st string. 5566 @#$$%^&*()_+";

str = str.split(" ").filter(word => /^[a-zA-Z]+$/.test(word)).join(" ");

alert(str);