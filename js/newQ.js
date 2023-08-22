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

console.log(balls)