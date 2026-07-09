function getSum(arr) {
    if (!arr || arr.length === 0) return 0;

    let sum = 0;
    for (let elem of arr) {
        sum += elem;
    }
    return sum;
}

function func(arr1, arr2) {
    let res1 = getSum(arr1);
    let res2 = getSum(arr2);

    return res1 / res2;
}

console.log(func([10, 20], [2, 3]));