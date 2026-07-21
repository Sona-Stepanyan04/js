//Create a function that takes a year as a parameter and checks whether it is a leap year or not.
function checksLeapYear(year) {
    return ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0))
}

console.log(checksLeapYear(2028))
