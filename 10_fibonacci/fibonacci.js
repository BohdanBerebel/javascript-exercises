const fibonacci = function(number) {
    let fibonacciArray = [1, 1];
    if (number < 0) return "OOPS";
    if (number == 0) return 0;
    for (i = 2; i < number; i++) {
        fibonacciArray.push(fibonacciArray[i - 2] + fibonacciArray[i - 1]);
    }
    return fibonacciArray[number - 1];
};

// Do not edit below this line
module.exports = fibonacci;
