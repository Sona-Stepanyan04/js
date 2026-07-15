function each(arr, callback) {
    let result = []

    for (let el of arr) {
        result.push(callback(el))
    }
    return result
}

let res = each([1, 2, 3, 4, 5, 6, 7, 8, 9], function (num) {
    return num * 2
})
console.log(res)