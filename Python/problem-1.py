def multiple_of_x(n, x):
    return n % x == 0


def multiple_of_3_and_5(end):
    result = 0
    for i in range(end):
        if multiple_of_x(i, 3) or multiple_of_x(i, 5):
            result = result + i
    return result


print(multiple_of_3_and_5(1000))
