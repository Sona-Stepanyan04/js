//Create a `test` function that accepts three functions as parameters and returns the sum of the results of the passed functions.
function test(func1, func2, func3) {
    console.log(func1() + func2() + func3());
}

function num1() {
    return 10;
}
function num2() {
    return 20;
}
function num3() {
    return 30;
}

test(num1, num2, num3)