let str = prompt("Մուտքագրեք տեքստ։") || "";

if (str.length > 5) {
    str = str.split("").reverse().join('');
}

alert(str);