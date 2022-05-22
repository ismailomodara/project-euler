def is_even(n):
    return n % 2 == 0


def fibonacci(first, second, max_value):
    fibonacci_terms = [first, second]
    fibonacci_even_sum = 0

    if is_even(first):
        fibonacci_even_sum += first

    if is_even(second):
        fibonacci_even_sum += second

    next_term = fibonacci_terms[-1] + fibonacci_terms[-2]

    while next_term < max_value:
        if is_even(next_term):
            fibonacci_even_sum += next_term
        fibonacci_terms.append(next_term)
        next_term = fibonacci_terms[-1] + fibonacci_terms[-2]

    return fibonacci_even_sum


print(fibonacci(1, 2, 4000000))
