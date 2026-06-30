//Given a number, obtain an array of the positions of all the digit '3's in that number, excluding the first and the last.
let num = 3123453673893;
let numStr = num.toString()
let arr = [];
for (let i = 1; i < num.toString().length - 1; i++) {
    if (numStr[i] === '3') {
        arr.push(i);
    }
}
console.log(arr);