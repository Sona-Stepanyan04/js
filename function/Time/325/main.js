//Create a function named `checkDate` that performs the described check. The function should return `true` if the date is valid and `false` otherwise. Here is an example of how the function works for January 31 and January 32:

function checkDate(year, month, day) {
    let date = new Date(year, month, day)
    return date.getFullYear() === year &&
        date.getMonth() === month &&
        date.getDate() === day
}
console.log(checkDate(2025, 2, 31));