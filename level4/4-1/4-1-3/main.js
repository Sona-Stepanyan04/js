//Create a function that takes seconds as a parameter and returns the number of days corresponding to those seconds.
function getNumberOfDays(number) {
    return Math.floor(number / (60 * 60 * 24));
}
console.log(getNumberOfDays(30000000000));