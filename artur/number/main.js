function num(n) {
    let x = n.toString();
    let len = x.length;
    let result = 0;

    for (let i = 0; i < len; i++) {
        let digit = Number(x[i]);
        result += digit * (2 ** (len - i - 1));
    }

    return result;
}

console.log(num(1010));

console.log(parseInt(1101,2));