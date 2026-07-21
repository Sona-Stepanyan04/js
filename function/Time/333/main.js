//Consider the period from the year 2000 to the current year. Determine how many times January 1st fell on a weekend—that is, on a Saturday or a Sunday—during this period.
let now = new Date()
let thisYear = new Date().getFullYear()
let curr = 0

for (let year = 2000; year <= thisYear; year++) {
    let january = new Date(year, 0, 1)

    if (january.getDay() === 0 || january.getDay() === 6) {
        curr++
    }
}
console.log(curr)