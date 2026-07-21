//Create a function that takes a date as a parameter and returns the zodiac sign corresponding to that date.
function zodiacToThatDay(day, month) {
    const cutoffDays = [20, 19, 21, 20, 21, 21, 23, 23, 23, 23, 22, 22];

    let arrZodiacDays = [
        "Capricorn", "Aquarius", "Pisces", "Aries", "Taurus", "Gemini",
        "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius"
    ]

    if (day < cutoffDays[month - 1] ) {
        return arrZodiacDays[month - 1]
    } else {
        return arrZodiacDays[month % 12]
    }
}

console.log(zodiacToThatDay(1, 6));