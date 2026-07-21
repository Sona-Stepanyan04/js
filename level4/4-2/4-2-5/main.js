//Create a function that returns an array of all leap years from the past hundred years.
function allLeapYearsFromThePastHundredYear() {
    let currentYear = new Date().getFullYear();
    let startYear = currentYear - 100;
    let allYears = [];
    for (let year = currentYear; year >= startYear; year-- ) {
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
            allYears.push(year);
        }
    }
    return allYears;
}
console.log(allLeapYearsFromThePastHundredYear());