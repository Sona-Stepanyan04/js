//You are given an array of numbers. Keep only the positive numbers in it.
let numArr = [-3,-2,-1,0,1,2,3,11,12]

//1
let res = numArr.filter(num => num > 0)


//2
let res2 = numArr.filter(num => num < 0)

//3
let res3 = numArr.filter(num => num > 0 && num < 10)


//5
let res5 = numArr.filter((num, index) => index < 30)

console.log(res)
console.log(res2)
console.log(res3)
console.log(res5)