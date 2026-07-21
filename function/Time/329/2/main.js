//Determine the number of days between the 20th of the current month and the 10th of the next month.
let date = new Date()
let curr20 = new Date(date.getFullYear(), date.getMonth(), 20)
let next10 = new Date(date.getFullYear(), date.getMonth() + 1, 10)
let res = next10.getTime() - curr20.getTime();
let days = res / (1000 * 60 * 60 * 24);
console.log(days);