//Create a function named `test` that accepts three functions as parameters. Pass into it, as the first parameter, a function that returns 1; as the second, a function that returns 2; and as the third, a function that returns 3. Log the sum of the functions' results to the console.
function test(func1,func2,func3) {
    console.log(func1() + func2() + func3());
}

test(
    function(){return 1},
    function() {return 2},
    function() {return 3}
)