function test() {
    let num = 10

    return function () {
        console.log(num)
        num--
    }
}
let res = test()
res()
res()
res()
res()