//Print to the console all numbers between 10 and 1000 whose first digit is even.

for (let i = 10 ; i <= 1000; i++) {
    if (String(i)[0] % 2 === 0){
        console.log(i);
    }
}