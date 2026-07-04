//Create a function that takes a number as a parameter and checks whether it is positive or negative. If the number is positive, the function should output '+++' to the console; if negative, it should output '---'
function numTest(num) {
    let result = num > 0 ? '+++' : num < 0 ? '---' : 'zero';
    console.log(result);
}
numTest(-6);