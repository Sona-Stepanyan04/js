//Display the number of days that have elapsed between March 1, 1988, and January 10, 2000.
let dateMarch = ('1988-03-01')
let dateJanuary = ('2000-01-10')

let between = Date.parse(dateJanuary) - Date.parse(dateMarch)
let resDay = between/ (1000 * 60 * 60 * 24)
console.log(resDay)