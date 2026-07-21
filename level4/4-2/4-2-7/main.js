//
// Create a function that returns the previous, current, and next days of the week as a word object:
//
// {
//     next: 'Mon',
//     curr: 'Sun',
//     prev: 'Sat',
// }

function threeDaysOfTheWeek() {
    let obj = {}
    let arrDaysWeek = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ]

    let toDay = new Date().getDay()
    obj.next = arrDaysWeek[(toDay + 1) % 7]
    obj.curr = arrDaysWeek[toDay]
    obj.prev = arrDaysWeek[(toDay - 1) % 7]
    return obj
}

console.log(threeDaysOfTheWeek())