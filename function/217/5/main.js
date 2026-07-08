//Create a function that takes a date as a parameter and returns the corresponding day of the week as a word.
function getCurrentDayName(date) {

    const days = [
        'Կիրակի',
        'Երկուշաբթի',
        'Երեքշաբթի',
        'Չորեքշաբթի',
        'Հինգշաբթի',
        'Ուրբաթ',
        'Շաբաթ'
    ]

    const dayIndex = date.getDay()
    return days[dayIndex]
}
const toDay = new Date()
console.log(getCurrentDayName(toDay))