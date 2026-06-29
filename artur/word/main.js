// const text = "qwerh";
// let resul = "";
// let start = "";


// let spred = text.length;
// let x = spred / 2;
// let y = text.slice(x);


// if (spred % 2 == 0) {
//     for (let i = 0; i < x; i++) {
//         start += text.at(i);
//     }
//     resul = y + start;
// } else if (spred % 2 != 0) {
//     x = (spred - 1) / 2;
//     for (let i = 0; i < x; i++) {
//         start += text.at(i);
//     }
//     resul = y + start;
// }

// console.log(start);
// console.log(y);
// console.log(resul);

const text = "qwerh";
const middle = Math.floor(text.length / 2);//ex. 5.95 -> 5
const start = text.slice(0, middle);
const end = text.slice(middle);
const result = end + start;

console.log(start);   
console.log(end);     
console.log(result);  