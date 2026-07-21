//Create a function that returns the number of days that have passed since, or remain until, a given date within the year, depending on whether that date has already occurred.
function daysPassedOrRemain(year, month, day) {
    let date = new Date(year, month - 1, day)
    let today = new Date();

    date.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);

    let diffInMs = Math.abs(today.getTime() - date.getTime());
    let diffInDays = Math.round(diffInMs / (1000 * 60 * 60 * 24));

    if (date < today) {
        console.log(`Անցել է ${diffInDays} օր:`);
    } else if (date > today) {
        console.log(`Մնացել է ${diffInDays} օր:`);
    } else {
        console.log("Այսօր հենց այդ օրն է:");
    }

    return diffInDays;
}

console.log(daysPassedOrRemain(2026, 7, 21))