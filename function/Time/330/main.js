//Determine how many hours have passed between yesterday's noon and the current moment.
let date = new Date();
let yesterdayNoon = new Date(date.getFullYear(), date.getMonth(),date.getDate() - 1, 12)

let res = date.getTime() - yesterdayNoon.getTime();
let hours = res / (1000 * 60 * 60)

console.log(hours);