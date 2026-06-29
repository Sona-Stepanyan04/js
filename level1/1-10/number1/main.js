//Fill the array with random numbers between 1 and 100.

let arr = Array.from({length: 10}, () => Math.floor(Math.random() * 100) + 1);
alert(arr.join("\n"));