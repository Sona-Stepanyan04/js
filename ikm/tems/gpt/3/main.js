const str = "Hello, World!";
let result = 0;

for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
        result++;
    }
}

alert(result);