function sum(arr) {
    if (!arr || arr.length === 0) {
        return 0;
    }

    let res = 0;

    for (let elem of arr) {
        res += elem;
    }

    return res;
}

console.log(sum([1, 2, 3, 4]));
console.log(sum([]));