function each(array, fn) {
    let res = []

    for (let el of array) {
        res.push(fn(el))
    }

    return res
}

let result = each(['ass', 'kll'], function (str) {
    return str.split('').map((char, index) => index === 0 ? char.toUpperCase() : char).join('')
})
console.log(result)