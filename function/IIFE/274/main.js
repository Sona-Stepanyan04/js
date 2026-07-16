let func = (function() {
    let num = 1
    return function() {
        console.log(num)
        if (num < 5) {
            num++
        } else if (num === 5) {
            num = 1
        }
    }
})()
func()
func()
func()
func()
func()
func()
func()
func()
func()
func()
