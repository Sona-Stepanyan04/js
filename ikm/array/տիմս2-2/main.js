let arr = ["123", "abc", "007", "45a", "9999", "0", "hello", "2025", "88", "world", "4567"];
let digitOnlyArr = [];

for (let i = 0; i < arr.length; i++) {
    if (/^\d+$/.test(arr[i])) {
        digitOnlyArr.push(arr[i]);
    }
}

if (digitOnlyArr.length > 5) {
    digitOnlyArr.pop();
}

alert(digitOnlyArr);