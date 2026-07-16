function test() {
    let num = 4

    return function () {
        if (num === 0) {
            console.log("The countdown is over.")
        } else if (num > 0) {
            console.log(num)
            num--
        }
    }
}

let res = test()
res()
res()
res()
res()
res()
res()
res()