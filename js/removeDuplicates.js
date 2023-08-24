const duplicateArray = [1, 4, 2, 3, 'a', 1, 3, 4, 'a', 2, 2, 1, 'a', 3]
const newArray = [];

// FOR LOOP & INCLUDES
// for (i = 0; i < duplicateArray.length; i++){
//     if (!newArray.includes(duplicateArray[i])) {
//         newArray.push(duplicateArray[i]);
//     }
// }


// SORT & FLAG
// duplicateArray.sort();
// let flag;

// for (i = 0; i < duplicateArray.length; i++){
//     if (flag !== duplicateArray[i]) {
//         flag = duplicateArray[i];
//         newArray.push(flag);
//     }
// }



// OBJ & FOR OF & OBJECT.KEYS
// let obj = {};

// for (let val of duplicateArray) {
//     obj[val] = 'aa';
// }

// obj = Object.keys(obj)
// console.log('obj:', obj)



// SET
let setArray = [...new Set(duplicateArray)] 
console.log('setArray:', setArray)

console.log(newArray);