'use strict';

// function fibonacci(){
//     var a =0;
//     var b =1;
//     var sum =b;
    
//     for(let i =0; i>100; i++ ) {
//         console.log('sum:', sum)
//         sum = a+b;
//         a=b;
//         b =sum
//     }
// }
// fibonacci()

// console.log(fibonacci())


const fibRec = (num) => {
    if (num < 2) return num;
    return (fibRec(num - 1) + fibRec(num - 2))
}

console.log('fibRec(10):', fibRec(10))

const facRec = (num) => {
    if (num < 2) return num;
    return num * facRec(num - 1)
}

console.log('facRec(10):', facRec(10))

// const array = []
const checkIfFIb = (num, count = 1, last = 0) => {
    console.log('count:', count)
    // array.push(count)
    // console.log('array:', array)
    if (count < num) return checkIfFIb(num, count + last, count)
    if (count === num) return true
    return false;
};