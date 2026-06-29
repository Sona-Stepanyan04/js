//Given a string of letters and numbers, check that this string contains no more than three letters.
let str = '1265478r956s45f';
// let arr = str.split('')
//     .filter(x => !('0' <= x && x <= '9'))
//     .join('');
let arr = str.match(/[a-zA-z]/g) || [];

if (arr.length > 3) {
    console.log(`no more than 3! ${arr.length}`);
} else {
    console.log('yes');
}