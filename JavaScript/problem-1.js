const multipleOfX = (n, x) => {
    return n % x === 0;
}

const multipleOf3And5 = (end) => {
    let multiplesSum = 0;

    for(let i = 0; i < end; i++) {
        if(multipleOfX(i, 3) || multipleOfX(i, 5)) {
            multiplesSum = multiplesSum + i;
        }
    }

    return multiplesSum;
}

const result = multipleOf3And5(1000);
console.log(result);
