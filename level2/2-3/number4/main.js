
// Given a date in the following format:
//
//     '2025-12-31'
// Convert this date to the following object:
//
// {
//     year: '2025',
//         month: '12',
//     day: '31',
// }

let date = "2025-12-31";
let arr = date.split("-");
const dateObj = {
    year: arr[0],
    month: arr[1],
    day: arr[2]
};
console.log(dateObj);