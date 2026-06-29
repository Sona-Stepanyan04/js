function matrix(n){
    let result = "";
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            result += j < i ? "0" : "*";
        }
        result += "\n";
    }
    return result;
}

console.log(matrix(3));