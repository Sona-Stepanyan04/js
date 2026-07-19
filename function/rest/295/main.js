//Write a function that accepts an arbitrary number of arguments and returns their arithmetic mean.
function arithmeticMean(...nums) {
    if (nums.length === 0) return 0
    let middle = 0
    for (let num of nums) {
        middle += num
    }
    return middle / nums.length
}
console.log(arithmeticMean(1,2,3,4,5,6,7,8,9))