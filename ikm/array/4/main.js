let arr = [4,1,8,3,7,9,2,6,5,9,9];
let max = arr[0];
let indexMax = 0;

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
        indexMax = i;
    }
}

for (let i = 0; i < arr.length; i++) {
    if (arr[i] == max) {
        arr[i] = 0;
    }
}

alert("Max value: " + max + "\nIndex of first max value: " + indexMax + "\nModified array: " + arr);
