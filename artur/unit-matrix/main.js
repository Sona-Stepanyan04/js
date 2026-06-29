function matrix(n) {
    let result = "";
    for (let i = 0; i < n; i++) {//սա մեր տողն է ստեղծում ն հատ
        for (let j = 0; j < n; j++) {//սա ն հատ յ է տպում
            result += (i === j ? "1" : "0");// յ կամ 1 է տպում երբ հավասար է i հակառակ դեպքում 0
        }
        result += "\n";//տեղը ն նիշ տպելուց հետո անցնում է նոր տող
    }
    return result;
}

console.log(matrix(3));