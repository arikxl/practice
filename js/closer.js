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

// let sum = a => b => b ? sum(a + b) : a;

// console.log( sum(2)(3)())

// const sumNums = (x) => {
//     return function(y){
//         return y ? sumNums(x + y) : x;
//     }
// }

// console.log(sumNums(10)(12)(3)());


// const createBase= (x) =>{
//     return (y) => {
//        return x + y
//     }
// }

// var addSix = createBase(6);
// console.log( addSix(10))
// console.log( addSix(21))


// for(var i =0; i<5; i++){
//     setTimeout(function log() {
//         console.log(i)
//     }, i *1000);
// }
// for(var i =0; i<5; i++){

//     function inner (i){
//         setTimeout(function log() {
//             console.log(i)
//         }, i *1000);
//     }
//     inner(i)
// }



// HIDE A PASSWORD
const someFunc = () => {
    const secret = 'secret';

    return () => secret;
}

const getSecret =someFunc();
console.log('getSecret:', getSecret)