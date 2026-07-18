function squre(arr) {
    let res = []
    for(let el of arr) {
        if(typeof el === 'object') {
            res = res.concat(squre(el))
        } else {
            res.push(el ** 2)
        }
    }
    return res
}
let res = squre([1, [2, 7, 8], [3, 4], [5, [6, 7]]])
console.log(res)