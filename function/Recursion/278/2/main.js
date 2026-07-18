let res = []
function oneDimensional(arr){
   for(let el of arr){
       if(typeof el == "object" && el !== null){
           oneDimensional(el)
       } else {
           res.push(el)
       }
   }
   return res
}

console.log(oneDimensional([1, [2, 7, 8], [3, 4, [5, [6, 7]]]]))
