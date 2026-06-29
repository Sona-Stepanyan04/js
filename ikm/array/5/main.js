let arr = [4,5,2,3,8,7,6,9];
let min = arr[0];
let indexMin = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i];
        indexMin = i;
    }
}

arr.splice(indexMin + 1, 0, -1, 0, 1)
alert(arr);