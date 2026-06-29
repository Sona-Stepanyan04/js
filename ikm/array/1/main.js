let str = prompt("Մուտքագրիր ամբողջ թվեր, բաժանված բացատներով:") || "";
let arr = str
    .trim()
    .split(/\s+/)
    .map(Number);

let isPolindrome = true;

for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    if (arr[i] !== arr[arr.length - 1 - i]) {
        isPolindrome = false;
        break;
    }
}

if (isPolindrome) {
    alert("Մուտքագրված զանգվածը պոլինդրոմ է։");
} else {
    let tmp = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = tmp;
    alert("Մուտքագրված զանգվածը պոլինդրոմ չէ։ " + arr.join(" "));
}

