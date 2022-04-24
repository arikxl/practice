'use strict';

// CLOSER

// const addNums = (x) => {
//     return function(y){
//         return function(z){
//             return x + y + z;
//         }
//     }
// };
// console.log(addNums(1)(2)(1));

// const multipleNums = (x) => {
//     return function(y){
//         return x * y;
//     };
// };
// const multiple5 = multipleNums(5);
// console.log(multiple5(2));


// what is the output?

// var num = 4;
// function outer(){
//     var num = 2;
//     function inner(){
//         num++;
//         var num = 3;
//         console.log(num);
//     }
//     inner();
// };
// outer();

let sum = a => b => b ? sum(a + b) : a;

const sumNums = (x) => {
    return function(y){
        return y ? sumNums(x + y) : x;
    }
}

console.log(sumNums(10)(12)(3)());