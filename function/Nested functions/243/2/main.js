function test(num1, num2, num3) {
    console.log(num1 + num2 + num3);
}

let func1 = function () {return 1};
let func2 = function () {return 2};
let func3 = function () {return 3};

test(func1(), func2(), func3());