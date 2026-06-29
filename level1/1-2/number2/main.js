//Given a number, print the last digit of this number to the console.

const num = 123456789;//number

let str = num.toString();//number => string

let res = str.length - 1;//last digit index

let result = str.at(res);//last digit number

console.log(result);//print to console