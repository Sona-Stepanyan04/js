//Given a number: 12345 Turn it over: 54321

const number = 12345;

const reversedNumber = parseInt(number.toString().split('').reverse().join(''), 10);

console.log(reversedNumber); // Output: 54321