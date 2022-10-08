const add = function(arg1, arg2) {
	let result = arg1 + arg2;
  return result;
};

const subtract = function(arg1, arg2) {
	let result = arg1 - arg2;
  return result;
};

const sum = function(...theArgs) {
	let total = 0;
  const array = theArgs;
  for(let i = 0; i < array.length; i++) {
    for(let j = 0; j < array[i].length; j++) {
      total += array[i][j];
    }
  }
  return total;
};

const multiply = function(...theArgs) {
  let total = 1;
  const array = theArgs;
  for(let i = 0; i < array.length; i++) {
    for(let j = 0; j < array[i].length; j++) {
      total *= array[i][j];
    }
  }
  return total;

};

const power = function(number, power) {
  let total = 1;
  for(let i = 0; i < power; i++) {
   total *= number;
  }
  return total;
};

const factorial = function(number) {
  if(number === 0) {
    return 1;
  }else{
      return (number * factorial(number -1));
  }
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
