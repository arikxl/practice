'use strict';

// HOISTING
myFunc();

// לא עובד עם פונקציית חץ
// const myFunc = () => {
//     console.log('hoisted');
// }

// LET & CONST DOSNT HOIST!!!

// here we have only declaration without assignments. so variables are hoisted
function myFunc() {
    console.log('hoisted');
};

// only declaration is hoisted. assignment is not.

