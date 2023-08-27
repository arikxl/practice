// REVRESE A STRING
let test = 'arik alexandrov';

let res = '';
for (i = 0; i <test.length; i++){
    res = test[i] + res
}
// console.log('res:', res)



// SORT BALLS BY COLORS
const balls = ['r', 'b', 'g', 'g', 'r', 'g', 'r', 'b', 'b', 'g', 'b', 'g'];

function swapBalls(ball1, ball2) {
    let temp = balls[ball1];
    balls[ball1] = balls[ball2];
    balls[ball2] = temp;
}

let leftPointer = 0;
let rightPointer = balls.length - 1;


while (true) {
    while (balls[rightPointer] !== 'r')
        rightPointer--
    while (balls[leftPointer] === 'r')
        leftPointer++
    if (leftPointer > rightPointer) break;
    swapBalls(leftPointer, rightPointer)
}

leftPointer = 0;
rightPointer = balls.length - 1;


while (true) {
    while (balls[rightPointer] === 'b')
        rightPointer--
    while (balls[leftPointer]!== 'b')
        leftPointer++
    if (leftPointer > rightPointer) break;
    swapBalls(leftPointer, rightPointer)
}

// console.log(balls)


const countVowels = (str) => {
    const vowels = ['a', 'e', 'i', 'o', ' u'];
    let count = 0;

    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            count++
        }
    }
    return count;
}

// console.log(countVowels('arik'))


// REVERSE EACH WORD IN SENTENCE

const str = 'Shalom World Arik Alexandrov'
const reverseString = (str) => {
    return str.split(' ').reverse().join(' ')
}

// console.log(reverseString(str))


// TWO SUM
const twoSum = (nums, target) => {
    const prevValue = {};
    for (let i = 0; i < nums.length; i++) {
        const currentNumber = nums[i];
        const neededValue = target - currentNumber;
        const index2 = prevValue[neededValue];
        if (index2 != null) {
            return [index2, i]
        } else {
            prevValue[currentNumber] = i
        }
    }
}

const twoSum1 = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        const currNum = nums[i]
        for (let j = 0; j < nums.length; j++) {
            if (currNum + nums[j] === target) {
                return[i,j]
            }
        }
    }
}


const twoSum3 = (nums, target) => {
    const newMap = {};

    for (let i = 0; i < nums.length; i++) {

        newMap[target - nums[i]] = i;
        if (newMap[nums[i]] != null) {
            console.log('newMap:', newMap)
            return [newMap[nums[i]], i];
        }

    }
    return newMap
}


// console.log(twoSum1([1,2,3,4,5,6,88], 11))
// console.log(twoSum3([1,2,3,4,5,6,88], 5))


function calcHour(time) {
    const [hour, min] = time.split(':');

    const h = hour > 12 ? (hour - 12) : +hour;
    const m = +min
    console.log('h:', h)
    console.log('m:', m)

    const hourDegree = 360 * h/12
    const minutesDegree = 360 * m/60
    console.log('hourDegree:', hourDegree)
    console.log('minutesDegree:', minutesDegree)

    const diff = Math.abs(hourDegree - minutesDegree);

    return diff > 180 ? 360-diff  : diff;

}

console.log( calcHour('15:50'))