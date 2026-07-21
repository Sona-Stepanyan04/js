//Display the number of months that have elapsed between your birth and the current moment.
let today = new Date();
let mybth = new Date(2004, 5,1)

let yearDiff = today.getFullYear() - mybth.getFullYear()
let monthDiff = today.getMonth() - mybth.getMonth()

let exactMonthDiff = yearDiff * 12 + monthDiff
console.log(exactMonthDiff)
