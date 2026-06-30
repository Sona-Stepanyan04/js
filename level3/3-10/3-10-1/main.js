//You are given an array. Modify it so that each element appears twice.
let arrNum = [2,7,600,86,99];
let arrNum2 = arrNum.flatMap((element) => [element,element]);
console.log(arrNum2);