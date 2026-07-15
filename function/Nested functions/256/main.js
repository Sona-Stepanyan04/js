function each(arr, callback) {
    let result = []

    for(let el of arr) {
        result.push(callback(el))
    }
    return result
}

function cube(num) {
    return num ** 3
}

let res = each([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],cube)
console.log(res)