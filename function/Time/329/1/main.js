//Determine the number of days between January 1 and September 10 of the current year.
let currentYear = new Date().getFullYear();

let sep10 = new Date(currentYear, 8, 10);
let jan1 = new Date(currentYear, 0, 1);

let res = sep10.getTime() - jan1.getTime();
let days = res / (1000 * 60 * 60 * 24);
console.log(days)