//You are given an array of numbers. After every single-digit number, insert another one just like it.
let arr = [1,15,9,10]
let newArr= arr.reduce((acc,curr) => {
   if (curr >= 0 && curr <= 9) {
       acc.push(curr)
       acc.push(curr)
   } else {
       acc.push(curr)
   }
   return acc;
},[])

let newArr1 = arr.flatMap(num => (num >= 0 && num <= 9) ? [num,num] : [num]);
console.log(newArr)