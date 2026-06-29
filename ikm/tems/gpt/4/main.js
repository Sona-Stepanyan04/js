let str = "Hello, World!";

if (str.startsWith("abc")) {
    str = str.replace("abc", "XYZ");
    alert(str);
} else {
    alert("String does not start with 'abc'");
}