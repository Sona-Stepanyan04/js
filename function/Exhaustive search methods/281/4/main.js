let arr = ['123', '456', '789'];
let res = arr.map(item => item.split('').map(Number))
console.log(res)