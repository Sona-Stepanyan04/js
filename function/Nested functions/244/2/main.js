let func = function (num1, num2) {
    return num1 + num2;
}

function test2(fun) {
    console.log(fun(3,6));
}

test2(func)