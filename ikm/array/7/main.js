let arr = [1, 2, 5, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

if (arr.length > 10) {
    for (let i = arr.length - 1; i > arr.length - 4; i++) {
        arr.splice(i, 1, arr[0]);
    }
} else {
    while (arr.length < 10) {
        arr.splice(Math.floor(arr.length / 2), 0, 0);
    }
}

alert(arr);