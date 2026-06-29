let arr = [4,1,8,3,7,5,2,6];
let max = arr[0];
let indexMax = 0;

for (let i =1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
        indexMax = i;
    }
}

arr.splice(indexMax + 1, 5);
alert(arr);
