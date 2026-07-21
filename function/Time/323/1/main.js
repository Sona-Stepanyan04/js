//Implement this solution as a function that takes the month and year as parameters and returns the number of the last day of that month.
function giveLastDayMonth(year, month) {
    let date = new Date(year, month, 0)
    return date.getDate()
}

console.log(giveLastDayMonth(2004, 6))