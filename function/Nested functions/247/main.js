//Create a function named `func` that takes two numbers as parameters and returns the sum of the square of the first number and the cube of the second number. To do this, create a helper function `square` that squares a number and a helper function `cube` that cubes a number.
function func(num1, num2) {
    function square(num) {
        return num * num;
    }

    function cube(num) {
        return num * num * num;
    }

    console.log(square(num1) + cube(num2));
}

func(2,3)