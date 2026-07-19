let func1 = () => (new Date()).getDate()
let func2 = () => (new Date()).getMonth()
let func3 = () => (new Date()).getFullYear()
let arr = []
let [year = func3(), month = func2(), day = func1()] = arr

console.log(year)
console.log(month)
console.log(day)