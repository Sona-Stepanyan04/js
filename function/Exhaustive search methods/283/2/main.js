let srt = ['asdfghjk', 'wer', 'adrt']
let res = srt.filter(item => item.length > 5)
console.log(res)

let num = [1, 2, [3, 4], 5, [6, 7]]

let res6 = num.filter(num => typeof num === 'number')
console.log(res6)