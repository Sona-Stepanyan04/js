//Determine how many hours are left until the end of the day.
let date = new Date()
let endDay = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 24)
let res = endDay.getTime() - date.getTime();
let hours = res / (1000 * 60 * 60)
console.log(hours)