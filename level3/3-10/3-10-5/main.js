//You are given an array of numbers. Keep only the numbers consisting of distinct digits, and remove the rest.
let numberArr = [123,121,77,508];
let result = numberArr.filter(digit => {
    let setDigit = new  Set(digit.toString())
    return digit.toString().length === setDigit.size;
})
console.log(result)