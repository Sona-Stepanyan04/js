//Given a string of letters and numbers, get an array of the positions of all the digits in this string.
let str = "afguo2ad5g6y8a9q"
//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
// let result = str.split("")
//     .reduce((acc, char, idx) => {
//        if (char >= '0' && char <= '9') {
//            acc.push(idx);
//        }
//        return acc;
//     },[]);
//------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------
let result = [...str].reduce((acc, char, idx) => /\d/.test(char) ? [...acc, idx] : acc, []);
console.log(result);