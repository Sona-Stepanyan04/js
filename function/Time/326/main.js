//Determine which day of the week December 31st of the current year falls on.
let now = new Date();
let date = new Date(now.getFullYear(), 11,31)
console.log(date.getDay())