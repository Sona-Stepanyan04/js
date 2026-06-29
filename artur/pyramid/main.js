
// function burg(n) {
//     let result = "";
//     for (let i = 1; i <= n; i++) {

//         for (let s = 0; s < n - i; s++) {
//             result += " ";
//         }

//         for (let j = 0; j < i ; j++) {
//             result += "* ";
//         }
//         result += "\n";
//     }
//     return result;
// }

function burg(n) {
  let result = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n ; j++) {
      result += j <= n - i ? " " : "* ";
    }
    result += "\n";
  }
  return result;
}

const burgs = burg(5);

console.log(burgs)