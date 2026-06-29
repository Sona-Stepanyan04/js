const str = "bjkh2 $%&*(@!^%$#@! 3498 jkhb";
// const str = "bjkh2aa";
let result = "";

if (str.length > 10) {
  for (let i = 0; i < str.length; i++) {
    const ch = str[i];

    if (ch >= "0" && ch <= "9") {
      result += String(Number(ch) * Number(ch));
    } else {
      result += ch;
    }
  }
} else {
  for (let i = 0; i < str.length; i++) {
    const ch = str[i];

    if (ch === "a") {
      result += "aa";
    } else {
      result += ch;
    }
  }
}

alert(result);