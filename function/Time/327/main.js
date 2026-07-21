//Determine what day of the week it was a month ago on the same day of the month as today.
let now = new Date();
let date = new Date(now.getFullYear(), now.getMonth() - 1, now.getDate())
let res = date.getDay()
console.log(res)