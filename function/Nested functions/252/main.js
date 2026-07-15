function func1() {
    return function () {
        return 1
    }
}
function func2() {
    return function () {
        return 2
    }
}

let sum = func1()() + func2()()
console.log(sum)