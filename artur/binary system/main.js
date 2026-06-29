let result = "";//es mer erkuakan hamakargi hamar tex a

function binary(n) {
    while (n > 0) {//enqan minchev mec lini 0-ic , vorovhetev enqan enq bajanum 2-i vor amboxj masy lini 0
        let mod = n % 2;//stex skzbic vercnum enq mnacordy 
        result = mod + result;//grum enq mer stacacy
        n = Math.floor(n / 2);//mer tivy bajanum enq 2-i kloracvac

    }

    return result;
}

console.log(binary(10));