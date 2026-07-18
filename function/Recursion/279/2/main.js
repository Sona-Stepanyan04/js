function arrStr(arr) {
    let res = [];
    for(let el of arr) {
        if(typeof el === 'object' && el !== null) {
            res = res.concat(arrStr(el));
        } else {
            res.push(el);
        }
    }
    return res;
}

let resArr = arrStr(['a', ['b', 'c', 'd'], ['e', 'f', ['g', ['j', 'k']]]]);
resArr = resArr.join('');

console.log(resArr);
