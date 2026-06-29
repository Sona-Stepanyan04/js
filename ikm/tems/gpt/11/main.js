let str = "Hello, World! This is     a test string.";
let strLength = 0;

str = str
.trim()
.split(" ")
.filter(word => word !== "");

for (let i = 0; i < str.length; i++) {
    if (strLength < str[i].length) {
        strLength = str[i].length;
    }
}

alert(strLength);