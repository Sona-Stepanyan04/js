//Create a function that returns the current day of the week as a word.
function getCurrentDayName() {
    const days = [
        'Կիրակի',
        'Երկուշաբթի',
        'Երեքշաբթի',
        'Չորեքշաբթի',
        'Հինգշաբթի',
        'Ուրբաթ',
        'Շաբաթ'
    ]
    const today = new Date();
    const dayIndex = today.getDay();
    return days[dayIndex];
}
console.log(getCurrentDayName());