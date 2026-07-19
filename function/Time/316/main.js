let date = new Date()

let day = date.getDay()
let currentDay = day === 0 ? 7 : day;
let res = 7 - currentDay;
console.log(res)