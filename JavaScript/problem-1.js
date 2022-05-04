const multipleOf3And5 = (end) => {
    let multiples = [];

    for(let i = 0; i < end; i++) {
        const multipleOf3 = i % 3 === 0;
        const multipleOf5 = i % 5 === 0;
        if(multipleOf3 || multipleOf5) {
            multiples.push(i);
        }
    }

    return multiples;
}

const sumOfMultiples = (end) => {
    const multiples = multipleOf3And5(end);
    return multiples.reduce((sum, i) => {
        return sum + i
    }, 0)
}

const result = sumOfMultiples(1000);
console.log(result);
