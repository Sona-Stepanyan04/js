function getSumElementObj(obj){
    let sum = 0;
    let values = Object.values(obj);

    for(let value of values){
        if(typeof value == "object" && value !== null){
            sum += getSumElementObj(value)
        } else {
            sum += value
        }
    }
   return sum
}
let res = getSumElementObj({a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}})
console.log(res)