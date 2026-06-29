let students  = [
    {
        Name: "Alice",
        LastName: "Smith",
        GroupNumber: 1,
        grades: [8, 9, 10, 7, 8]
    },
    {
        Name: "Bob",
        LastName: "Johnson",
        GroupNumber: 2,
        grades: [6, 7, 8, 5, 6]
    }
]

for (let i = 0; i < students.length; i++) {
    let student = students[i];
    let hasLowGrade = false;

    for (let j = 0; j < student.grades.length; j++) {
        if (student.grades[j] < 7) {
            hasLowGrade = true;
            break;
        }
    }

    student.Likwid = hasLowGrade;
}

console.log(students);
alert(JSON.stringify(students, null, 2));