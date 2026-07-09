//Create a function that takes a year as a parameter and checks whether it is a leap year or not.
function checkLeapYear(date) {
    let year = date.getFullYear();
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0

}
console.log(checkLeapYear(new Date()))
console.log(checkLeapYear(new Date('2024-01-01')))