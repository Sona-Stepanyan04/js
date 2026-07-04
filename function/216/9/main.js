let num = 12345;
let res = getDigitsSum(num);
console.log(res);

function getDigitsSum(num) {
    let arr = num.toString().split('');
    let sum = 0;

    for (let elem of arr) {
        sum += Number(elem);
    }

    return sum;
}