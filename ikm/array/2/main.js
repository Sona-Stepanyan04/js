let arr = [1, 5, 3, 7, 9, 2, 4, 6, 8, 0];

let min = arr[0];
let max = arr[0];
let indexMin = 0;
let indexMax = 0;

for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i];
        indexMin = i;
    }
    if (arr[i] > max) {
        max = arr[i];
        indexMax = i;
    }
}

arr[indexMin] = max;
arr[indexMax] = min;
alert("Մինիմում: " + min + ", Մաքսիմում: " + max);
alert("Զանգվածը՝ " + arr.join(", "));