'use strict';

// return total grades for students with grades greater then 60
// after 20 grades have been added to those who scored less then 60

// const students = [
//     {name: 'Arik', grade: 80},
//     {name: 'Danielle', grade: 90},
//     {name: 'Yehonatan', grade: 55},
//     {name: 'Shlomi', grade: 35},
// ];

// const totalGrades = students.map(( student ) => {
//     if(student.grade < 60){
//         student.grade += 20;
//     }
//     return student;
// })
// .filter(students => students.grade > 60)
// .reduce((total, student) => total + student.grade, 0);

// console.log( totalGrades)

const array = [1,[2,3,4,[4,[5,6]]],7,4];

// console.log( array.flat())
// console.log( array.flat(4))
// console.log( array.flat(Infinity))

// const findFour = (array,) => {
//     return( array.flat(Infinity).filter(n => n===4))
// }

// console.log('findFour(array):', findFour(array))


const files = ["a.txt", "txt.docx", "c.xsls",["d.docx", "e.txt",["z.xsls", "x.txt",["y.pdf"]], "f.pdf"], "g.txt"];

const findTxtFiles = (array, type) => {
    // files.flat(Infinity).map((f) =>  { 
    //     if(f.slice(-4)==='.txt'){
    //         newArray.push(f)
    //         // return newArray
    //     }
    //     console.log('newArray:', newArray)
    //     })

    return array.flat(Infinity)
    .filter(files=> files
    .slice(-type.length)===type) 
    // return array.flat(Infinity).filter(files=> files.slice(-3)===type) 
}

console.log(findTxtFiles(files, 'txt'))