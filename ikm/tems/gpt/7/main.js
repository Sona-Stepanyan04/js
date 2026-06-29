let str = "Hello, World! 123 @#";
let result = 0;

const digits = str
  .split("")
  .filter(ch => ch >= "0" && ch <= "9");

for (const d of digits) {
    result += Number(d);
}

alert(result);