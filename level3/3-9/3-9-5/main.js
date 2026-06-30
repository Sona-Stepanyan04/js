// Create the following array using loops:
//
//     [
//         [1, 2, 3],
//         [4, 5, 6],
//         [7, 8, 9],
//     ]
let box = [];
let them = 0;

for (let i = 1 ; i < 4 ; i++) {
    let row = [];
    for (let j = 1; j < 4; j++) {
        them++
        row.push(them);
    }
    box.push(row);
}
console.log(box)