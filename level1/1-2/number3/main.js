//Given a number, print the sum of the first and last digits of this number to the console.


//one 
let number = 123456;//number

let str = number.toString();// number to string

let strLast = str.length - 1;//last number 
let one = str.at(0);//first number
let two = str.at(strLast);//last number

let oneNum = Number(one);//string => number
let twoNum = Number(two);//string => number


const sum = oneNum + twoNum ;//sum

console.log(sum);//print

//two
function sumFirstLast(num) {
  let str = num.toString();//number => string
  return Number(str.at(0)) + Number(str.at(-1));//sum 
}

console.log(sumFirstLast(123456)); //print