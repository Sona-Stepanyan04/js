// function func1(num1) {
//     return function (num2) {
//         return function (num3) {
//             return function (num4) {
//                 return function () {
//                     return [num1, num2, num3, num4]
//                 }
//             }
//         }
//     }
// }


function func1(firstNum) {
    let arr = [firstNum];

    function helper(nextNumber) {
        if (nextNumber !== undefined) {
            arr.push(nextNumber);
            return helper
        }

        return arr
    }

    return helper;
}

console.log(func1(2)(3)(4)(5)(6)(7)(8)(9)())