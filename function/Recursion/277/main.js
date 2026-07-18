let arr = [1, 2, 3, 4, 5];
function getSum() {
    let sum = arr.shift() ** 2

    if (arr.length !== 0) {
        sum += getSum(arr)
    }

    return sum
}

console.log(getSum())