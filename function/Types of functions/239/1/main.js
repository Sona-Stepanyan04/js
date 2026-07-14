//Create an array `arr` containing three functions. Have the first function return the number 1, the second return the number 2, and the third return the number 3.
let arr = [
    function () {return 1},
    function () {return 2},
    function () {return 3}
]

//Using the array `arr` you created, output the number 3 to the console by calling the appropriate function.
console.log(arr[2]())

//Using the array `arr` you created, find the sum of the function results (without using a loop).
let sum = arr[0]() + arr[1]() + arr[2]()
console.log(sum)


//Iterate over the array `arr` you created and output the results of all the functions to the console.
for (let fun of arr) {
    console.log(fun())
}