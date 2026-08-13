//Create a function that returns the number of days remaining until the next February 29th.
function daysUntilNextFeb29() {

    const today = new Date();

    const current = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    let year = current.getFullYear();

    function isLeapYear(y) {
        return (y % 4 === 0 && y % 100 !== 0) || (y % 400 === 0);
    }

    let targetFeb29 = new Date(year, 1, 29);

    if (!isLeapYear(year) || current > targetFeb29) {
        year++;
        while (!isLeapYear(year)) {
            year++;
        }
        targetFeb29 = new Date(year, 1, 29);
    }

    const diffInMs = targetFeb29 - current;

    return Math.round(diffInMs / (1000 * 60 * 60 * 24));
}

console.log(daysUntilNextFeb29());