//You are given two numbers. Check that the first digits of these numbers match.

//one
const one = 123;
const two = 1456;

const oneStr = one.toString();
const twoStr = two.toString();

const comp = oneStr.at(0) === twoStr.at(0);

console.log(comp);

//two
function compare(x,y) {
    let str1 = x.toString();
    let str2 = y.toString();
    return str1.at(0) == str2.at(0);
}

console.log(compare(123,2456));