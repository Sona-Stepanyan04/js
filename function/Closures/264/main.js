function func() {
    let num = 0;

    return function() {
        console.log(num);
        num++;
    };
}

let test = func;

test()();
test()();
test()();