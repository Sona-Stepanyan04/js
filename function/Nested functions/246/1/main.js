function test(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = func(arr[i]);
    }
    return arr;
}

let result = test(
    [1,2,3,4,5,6,7,8,9],
    function (n) {
        return n * n * n;
    }
)

console.log(result);