function test(num, func1, func2) {
    console.log(func1(num) + func2(num));
}

test(3,
    function(n) {
    return n * n;
    },
    function(n) {
    return n * n * n;
    })

