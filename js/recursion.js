// 'use strict';

// const babushka = {
//     inside: {
//         inside: {
//             inside: {
//                 inside: {
//                     inside: {
//                         inside: {
//                             inside: {
//                                 inside: {
//                                     inside: {
//                                         type: 'prize'
//                                     },
//                                     type: 'doll'
//                                 },
//                                 type: 'doll'
//                             },
//                             type: 'doll'
//                         },
//                         type: 'doll'
//                     },
//                     type: 'doll'
//                 },
//                 type: 'doll'
//             },
//             type: 'doll'
//         },
//         type: 'doll' 
//     },
//     type: 'doll'
// };

// var count =0;
// function getPrize(babushka) {
//     if(!babushka){
//         return 'No prize';
//     }
//     else if(babushka.type === 'prize'){
//         return 'You won a prize!';
//     }
//     else {
//         count ++
//         console.log('count:', count)
//         return getPrize(babushka.inside);
//     }
// }

// console.log( getPrize(babushka));


// function getFactorial(num){
//     if(num === 0){
//         return 1;
//     }
//     else {
//         return num * getFactorial(num - 1);
//     }
// }

// console.log(getFactorial(5));


// const add =(x) => {
//     return function (y) {
//         return y? add(x +y) : x;
//     }
// }

// const add = x => y => y ? add(x+y) : x ;
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


console.log(openFile(files))
