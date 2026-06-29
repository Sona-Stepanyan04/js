//Print to the console all numbers between 10 and 1000 whose second-to-last digit is even.
for (let i = 10; i <= 1000; i++) {
    let temp = Math.floor(i / 10);
    let secondToLast = temp % 10;

    if (secondToLast % 2 === 0) {
        console.log(i)
    }
}