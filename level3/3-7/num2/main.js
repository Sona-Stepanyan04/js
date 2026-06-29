//Given a number, get an array of divisors of this number.
let number = 24;
let divisorsArr = [];
for (let i = 1; i <= number; i++) {
    if (number % i === 0){
        divisorsArr.push(i);
    }
}
console.log(divisorsArr);