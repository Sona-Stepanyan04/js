//Create a function that takes seconds as a parameter and returns the number of days corresponding to those seconds.
function getCurrentSeconds(seconds) {
    return Math.trunc((seconds / 86400))
}

console.log(getCurrentSeconds(90000))
