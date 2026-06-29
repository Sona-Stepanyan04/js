//Print to the console all numbers between 1 and 1000, the sum of the first and second digits of which is equal to five.

for (let i = 10; i <= 1000; i++) {
    let num = i.toString()
    let sum = Number(num[0]) + Number(num[1])
    if (sum === 5) {
        console.log(i)
    }
}