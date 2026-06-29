// Given a number:
//
//     35142
// Sort the digits of this number. In our case, the result should be:
//
//     12345
let num = 35142;
let str = String(num)
let arr = str.split('')
console.log(arr)
for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
        let temp = arr[j]
        if (arr[j] < arr[j - 1]) {
            arr[j] = arr[j - 1]
            arr[j - 1] = temp
        }
    }
}
let result = Number(arr.join(''))
let res = Number(String(num).split('').sort().join(''))
console.log(res)
console.log(arr)