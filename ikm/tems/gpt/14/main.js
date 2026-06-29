let str = "a1b2c3!";
str = str.split("");
for (let i = 0; i < str.length; i++) {
    if (str[i] >= '0' && str[i] <= '9') {
        str[i] = '';
    }
}

str = str.join("");
alert(str);