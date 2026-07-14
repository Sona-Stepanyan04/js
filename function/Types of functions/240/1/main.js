//Create an object with three functions. Have the first return the number 1, the second the number 2, and the third the number 3. Using these functions, log the sum of the returned numbers to the console.
let obj = {
    func1: function () {return 1},
    func2: function () {return 2},
    func3: function () {return 3}
}

let sum = obj.func1() + obj.func2() + obj.func3()
console.log(sum)

//Iterate over the created object and output the results of the functions to the console.

for (let key in obj) console.log(obj[key]())