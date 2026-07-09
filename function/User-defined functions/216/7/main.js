function add(num) {
    if (num <= 9) {
        return '0' + num;
    } else if (num > 9) {
        return num;
    }
}
console.log(add(9));