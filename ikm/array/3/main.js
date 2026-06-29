let arr = [4,2,7,1,3,1,9,5,6,8];
let min = arr[0];
let indexMin = 0;
for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i];
        indexMin = i;
    }
}

arr = arr.filter(item => item !== min);
alert("Մինիմում: " + min);
alert("Զանգվածը՝ " + arr.join(", "));