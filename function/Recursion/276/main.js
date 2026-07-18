let arr = [1, 2, 3, 4, 5];

function arrElement() {
    console.log(arr.shift(), arr)

    if (arr.length !== 0) {
        arrElement()
    }
}
arrElement()