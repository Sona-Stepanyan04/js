//Given an array, remove every fifth element from it.
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let result = arr.filter((_, idx) => (idx + 1) % 5 !== 0);
console.log(result)