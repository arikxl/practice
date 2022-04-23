'use strict';

// return total grades for students with grades greater then 60
// after 20 grades have been added to those who scored less then 60

const students = [
    {name: 'Arik', grade: 80},
    {name: 'Danielle', grade: 90},
    {name: 'Yehonatan', grade: 55},
    {name: 'Shlomi', grade: 35},
];

const totalGrades = students.map(( student ) => {
    if(student.grade < 60){
        student.grade += 20;
    }
    return student;
})
.filter(students => students.grade > 60)
.reduce((total, student) => total + student.grade, 0);


console.log( totalGrades)