let str = "aaa juioop TYUILM 3652165";

if (str.startsWith("aaa")) {
    str = str.replaceAll(" ", "");
    str = str.toLowerCase();
    alert(str);
} else {
    alert(str)
}