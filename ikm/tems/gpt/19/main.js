let str = "abc12x3y045";
let sum = 0;

let parts = str
  .split("")
  .map(ch => ((ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z")) ? " " : ch)
  .join("")
  .split(" ")
  .filter(s => s !== "");

for (let i = 0; i < parts.length; i++) {
  sum += Number(parts[i]);
}

alert(sum); // 60
