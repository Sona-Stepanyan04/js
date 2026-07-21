//Determine how many hours have passed between the start of the day and the current time.

let today = new Date();
let startDay = new Date(today.getFullYear(), today.getMonth(), today.getDate(), );
let res = today.getTime() - startDay.getTime();
let hours = res / (1000 * 60 * 60)
console.log(hours);