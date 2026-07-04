function getSum(arr) {
    if (!arr || arr.length === 0) return 0

    let res = 0
    for (let el of arr) {
        res += el
    }
    return res
}
console.log(getSum([1, 2, 3, 4]));