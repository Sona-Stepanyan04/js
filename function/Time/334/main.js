let date = new Date()

//Determine how many seconds have elapsed since the start of the day up to the current moment.
let startDay = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0)
let res = date.getTime() - startDay.getTime();
console.log(res / 1000)

//Determine how many seconds are left until the end of the day.
let endDay = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 24)
let res2 = endDay.getTime() - date.getTime();
console.log(res2 / 1000)

//Determine how many days are left until New Year's.
let newYear = new Date(date.getFullYear(), 11, 31,)
let res3 = newYear.getTime() - date.getTime();
console.log(res3 / (1000 * 60 * 60 * 24))

//Determine how many Fridays the 13th there are in the current year.
let now = new Date().getFullYear()
let currentDay13 = 0
for (let month = 0; month < 11; month++) {
    let date = new Date(now, month, 13)

    if (date.getDay() === 5) {
        currentDay13++
    }
}
console.log(currentDay13)

//Determine what year it was three months ago.

let threeMonthsAgo = new Date(date.getFullYear(), date.getMonth() - 3, date.getDate())
console.log(threeMonthsAgo.getFullYear())

//Determine which day of the week the last day of the current month falls on.
let lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0)
console.log(lastDay.getDay())

//Write code that finds the previous leap year.
function getPreviousLeapYear() {
    let year = date.getFullYear() - 1

    while (true) {
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
            return year
        }
        year--
    }
}
console.log(getPreviousLeapYear())

//Write code that finds the next leap year.
function getNextLeapYear() {
    let year = date.getFullYear() + 1

    while (true) {
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
            return year
        }
        year++
    }
}
console.log(getNextLeapYear())




