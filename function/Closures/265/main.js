// let counter = 0;
//
// function test() {
//     return function() {
//         console.log(counter);
//         counter++;
//     };
// }
//
// let func = test;
//
// let func1 = func();
// let func2 = func();
// func1();
// func2();
// func1();
// func2();

function test() {
    let counter = 0;

    return function() {
        return function() {
            console.log(counter);
            counter++;
        };
    };
}

let func = test()();

let func1 = func;
let func2 = func;
func1();
func2();
func1();
func2();