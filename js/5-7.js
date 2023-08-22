const fiveSeven = (num) => {
    if (num !== 5 && num !== 7) {
        console.log('Please enter 5 or 7');
    } else {   
        const res = num === 7 ? 5 : 7;
        console.log(`Got ${num}, Return ${res}`)
    }
}

fiveSeven(5)
