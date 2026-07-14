//Create an object with three functions, each accepting an array of numbers as a parameter. Configure the first function to return the sum of the array elements, the second to return the sum of their squares, and the third to return the sum of their cubes.
let math = {
    sum: function (...args) {
        let s = 0
        for (let num of args) {
            s += num
        }
        return s;
    },
    sumSquares: function (...args) {
        let s = 0
        for (let num of args) {
            s += num * num
        }
        return s;
    },
    sumCubes: function (...args) {
        let s = 0
        for (let num of args) {
            s += num * num * num
        }
        return s;
    }
}
console.log(math.sum(1,2,3,4),
    math.sumSquares(1,2,3,4),
    math.sumCubes(1,2,3,4))

// let math = {
//     sum: arr => arr.reduce((acc, num) => acc + num, 0),
//     sumSquares: arr => arr.reduce((acc, num) => acc + num * num, 0),
//     sumCubes: arr => arr.reduce((acc, num) => acc + num * num * num, 0)
// };