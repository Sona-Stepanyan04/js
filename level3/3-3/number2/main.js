// You are given a number:
//
//     1357
// Check that all digits of this number are odd.

let num = 1357;
let res = 0;
String(num).split('').forEach(i => {
   if (i % 2 === 0) {
       res += 1;
   }
});
if (res === 0) {
console.log('yes');
} else {
    console.log('no');
}