const isEven = (n) => {
    return n % 2 === 0;
}

const fibonacci = (first, second, max) => {
    let terms = [first, second];
    let termsEvenSum = 0;

    if(isEven(terms[0])) {
        termsEvenSum += terms[0];
    }

    if(isEven(terms[1])) {
        termsEvenSum += terms[1];
    }

    let next = terms.at(- 2) + terms.at(-1);

    while(next < max) {
        if(isEven(next)) {
            termsEvenSum +=next
        }

        terms.push(next)
        next = terms.at(- 2) + terms.at(-1);
    }

    return termsEvenSum;
}

const result = fibonacci(1, 2, 4000000);
console.log(result)
