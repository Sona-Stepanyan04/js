//You are given a number. Check that the digits of this number are arranged in ascending order.
let num = 123457891;
let arr = String(num).split('');
let isAscending = true;
for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] > arr[i]) {
        isAscending = false;
        break;
    }
}
console.log(isAscending ? "yes" : "no");