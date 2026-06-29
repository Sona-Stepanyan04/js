let str = "Hello,     World! This is a    test.  ";
str = str
.trim()
.split(" ");

str = str.filter(word => word !== "").join(" ");

str = str.split(" ");

alert(str.length);
