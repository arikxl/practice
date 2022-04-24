'use strict';

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

console.log( getPrize(babushka));


function getFactorial(num){
    if(num === 0){
        return 1;
    }
    else {
        return num * getFactorial(num - 1);
    }
}

console.log(getFactorial(5))