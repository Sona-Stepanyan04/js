//Find all numbers from 1 to 1000 the sum of whose digits is 13.
let sumNumThirteen = [];
for (let i = 1; i <= 1000; i++) {
    let digitSum = i.toString().split('').reduce((sum, d) => sum + Number(d), 0);

    if (digitSum === 13) {
        sumNumThirteen.push(i);
    }
}
console.log(sumNumThirteen);