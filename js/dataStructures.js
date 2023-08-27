// Ques 1: Implement Linear Search in JavaScript
// Write a function to search "target" in nums. If target exists, then return its index.
// Otherwise, return -1. You must write an algorithm with O(n) runtime complexity.

// Input: nums = [4,5,6,7,0,1,2], target = 0  ----->>>>>  Output:  4
// Input: nums = [4,5,6,7,0,1,2], target = 3  ----->>>>>  Output: -1


const linearSearch = (array, target) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i
        } 
    }
    return -1
}
const linearSearch1 = (array, target) => {

    if (array.includes(target)) {
        return array.indexOf(target)
    }
    return -1
}
const linearSearch2 = (array, target) => {
    const indexs = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            indexs.push(i)
        } 
    }
    if (indexs.length > 0) return indexs;
    return -1
}

// console.log(linearSearch2([4, 5,0, 6, 7, 0, 1, 2], 0));
// console.log(linearSearch2([4, 5, 0, 6, 7, 0, 1, 2], 3));


const binarySearch = (array, target) => {
    const sortedArray = array.sort((a, b) => a-b)
    console.log('sortedArray:', sortedArray)
    let start = 0;
    let end = sortedArray.length - 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2)

        if (sortedArray[middle] === target) {
            return middle
        } else if (sortedArray[middle] < target){
            start = middle + 1
        } else {
            end = middle -1
        }
    }
    return -1
}


// console.log(binarySearch([4, 5, 6, 7, 0, 1, 2], 0));
// console.log(binarySearch([4, 5, 6, 7, 0, 1, 2], 3));

const findKthPositive = (array, k) => {
    let count = 0;
    for (let i = 0; i < array.length; i++){
        if (array[i] <= k + count) {
            count++
        }
    }
    return k + count;
}


// console.log(findKthPositive([2, 3, 4, 7, 11], 5));


// [-2,-1,-1,1,2,3]

const maximumCount = (array) => {
    let positiveCount = 0;
    let negativeCount = 0;
    for (let i = 0; i < array.length; i++){
        if (array[i] < 0) {
            negativeCount++
        } else {
            positiveCount++;
        }
    }
    return positiveCount > negativeCount ? positiveCount : negativeCount;
}

console.log(maximumCount([-4,-2,-1,0,-1,1,2,3]));
