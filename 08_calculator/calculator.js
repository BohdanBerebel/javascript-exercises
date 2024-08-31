const add = function(a, b) {
  return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(arr) {
  return arr.reduce((sum, number) => sum + number, 0)
};

const multiply = function(arr) {
  return arr.reduce((accumulator, number) => accumulator * number, 1)
};

const power = function(a, b) {
	return Math.pow(a, b)
};

const factorial = function(number) {
	let result = 1;
  for ( i = 1; i <= number; i++) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
