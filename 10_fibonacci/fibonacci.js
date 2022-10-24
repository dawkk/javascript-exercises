const fibonacci = function(position) {

  let lastNumber = 0;
  let currentNumber = 1;
  let sumNumber = +position;
  let positionToNumber = +position;

  console.log(position)

if(position < 0) {
  return "OOPS";
  
} else {
  for(let i = 2; i <= positionToNumber; i++) {
    sumNumber = lastNumber + currentNumber;
    lastNumber = currentNumber;
    currentNumber = sumNumber;
  }
  return sumNumber;
};
  
};

// Do not edit below this line
module.exports = fibonacci;
