//Given a variable containing a string, check that this string is a number, meaning it consists only of digits.
let str = '123456a'
let res = /^\d+$/g.test(str)

console.log(res)