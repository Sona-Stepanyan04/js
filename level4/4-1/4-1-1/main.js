//Create a function that returns the current day of the week as a word.

function  getCurrentDayName() {
    let dayWeek = new Date().getDay()

    let arrDayWeek =[
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ]
    return arrDayWeek[dayWeek]
}
console.log(getCurrentDayName())