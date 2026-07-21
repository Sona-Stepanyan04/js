//Create a function that returns the number of days remaining until the end of the current month.
function endOfTheCurrentMonth() {
    let toDay = new Date();

    let nextMonth = new Date(toDay.getFullYear(), toDay.getMonth() + 1, 1);

    let diffInMs = nextMonth.getTime() - toDay.getTime();

    return Math.ceil(diffInMs / (1000 * 60 * 60 * 24));
}

console.log(endOfTheCurrentMonth())