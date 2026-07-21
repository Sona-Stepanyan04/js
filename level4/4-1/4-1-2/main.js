//Create a function that takes a date as a parameter and returns the corresponding day of the week as a word.
function getCurrentDayName(year, month, day)  {
    let currentDay = new Date(year, month - 1, day).getDay();
    let arrDayWeek =[
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ]

    return arrDayWeek[currentDay]
}

console.log(getCurrentDayName(2026,6,1))