//Given a number, check whether it is negative or not. Print this information to the console.

function myFunction (x){
    if(x > 0 ){
        return "positive";
    }else if(x == 0){
        return "0";
    }
    else{
        return "negative";
    }
}

let result = myFunction(2);
document.getElementById("demo").innerHTML = "This number is :" + result;

console.log(result)