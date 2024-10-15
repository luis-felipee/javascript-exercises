const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(x) {
  return x.reduce((acc, num) => acc + num, 0);
};

const multiply = function(numbers) {
  return numbers.reduce((acc, num) => acc * num, 1);

};

const power = function(x, y) {
	return x ** y;
};

const factorial = function(x) {
  if (x < 1) {
    return 1;
  }
  let product = 1;
  for (let i = x; i > 0 ; i--) {
      product *= i;
    
  }
  return product;
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
