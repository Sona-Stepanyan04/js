let str = "Hello, World!";

str = str.split("");

for (let i = 0; i < str.length; i++) {
    const ch = str[i];

    if (ch >= "A" && ch <= "Z") {
        str[i] = ch.toLowerCase();
    }
    else if (ch >= "a" && ch <= "z") {
        str[i] = ch.toUpperCase();
    }
}

str = str.join("");
alert(str);
