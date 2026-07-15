function each(arr, f) {
    let res = [];

    for (let el of arr) {
        res.push(f(el))
    }
    return res;
}

let result = each(['ass', 'kll'], function (str) {
    return str.split('').reverse().join('')
})
console.log(result)