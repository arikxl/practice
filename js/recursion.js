// 'use strict';

const babushka = {
    inside: {
        inside: {
            inside: {
                inside: {
                    inside: {
                        inside: {
                            inside: {
                                inside: {
                                    inside: {
                                        type: 'prize'
                                    },
                                    type: 'doll'
                                },
                                type: 'doll'
                            },
                            type: 'doll'
                        },
                        type: 'doll'
                    },
                    type: 'doll'
                },
                type: 'doll'
            },
            type: 'doll'
        },
        type: 'doll' 
    },
    type: 'doll'
};

var count =0;
function getPrize(babushka) {
    if(!babushka){
        return 'No prize';
    }
    else if(babushka.type === 'prize'){
        return 'You won a prize!';
    }
    else {
        count ++
        console.log('count:', count)
        return getPrize(babushka.inside);
    }
}

// console.log( getPrize(babushka));


function getFactorial(num){
    if(num === 0){
        return 1;
    }
    else {
        return num * getFactorial(num - 1);
    }
}

// console.log(getFactorial(5));


// const add =(x) => {
//     return function (y) {
//         return y? add(x +y) : x;
//     }
// }

const add = x => y => y ? add(x+y) : x ;
// console.log(add(5)(2)(5)(5)());

const files = {

    name: 'root',
    isFolder: true,
    items :[
        {
        name: 'public',
        isFolder: true,
        items :[
            {
                name: 'public nested 1',
                isFolder: true,
                items :[
                    {
                        name: ' public nested 1 - index.html',
                        isFolder: false,     
                    },
                    {
                        name: 'public nested 1 - root',
                        isFolder: false,
                    }
                ]
            },
            ]
    },
    {
        name: 'public nested 2 -data',
        isFolder: false,
    },
        {
        name: 'public nested 2 - src',
        isFolder: true,
        items :[
            {
                name: 'src assets 1',
                isFolder: true,
                items :[
                    {
                        name: 'css.style',
                        isFolder: false,     
                    },
                    {
                        name: 'js',
                        isFolder: false,
                    }
                ]
            },
            ]
    },
    {
        name: 'package.json',
        isFolder: false,
    }
    ]
}

const openFile = (file) => {
    if (file.isFolder) {
        console.log(file.name, 'folder')
        file.items.map(f => {
            openFile(f)
        })
    } else console.log(file.name, 'file')
    if(!file) return 'aaa' 
}


// console.log(openFile(files))


function factorial(n) {
    if (n === 1) return n
    else return n * factorial(n-1)
}

// console.log( factorial(5))


function rangeOfNumbers(start, end) {
    if (start > end) return []
    else {
        const nums = rangeOfNumbers(start , end-1)
        nums.push(end)
        return nums
    }
}

// console.log(
//     rangeOfNumbers(0,5)
// )


function fib(n) {
    if (n <= 1) return n
    else return fib(n - 1) + fib(n -2)
}

//

function reversString(str) {
    if (str.length < 1) return ''
    else return reversString(str.substr(1))+ str.charAt(0)
}

//

// function subsets(array) {
//     let result = [];
//     let temp = [];

//     function recSubsets(array, i) {
        
//     }

//     recSubsets(array, i)
//     return result
// }

// console.log(subsets([0,1,2,3]))