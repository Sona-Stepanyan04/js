//
// Given a string containing a number:
//
//     '1234567'
// Separate triplets of digits with spaces, starting from the end of the number. In our case, the result should look like this:
//
// '1,234,567'
let str = '12345676598';
let chars = [...str];
let resultArr = [];

for (let i =  chars.length - 1, count = 1; i >= 0; i--, count++) {
    resultArr.push(chars[i]);

    if (count % 3 === 0 && i !== 0) {
        resultArr.push(",");
    }
}

let result = resultArr.reverse().join("");
console.log(result);