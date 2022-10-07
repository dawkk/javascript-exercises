const sumAll = function(arg1, arg2) {
  let sum = 0
  if(arg1 < 0 || arg2 < 0){ 
    return 'ERROR'
  } else if (typeof arg1 != "number" || typeof arg2 != "number"){
    return 'ERROR'
    } else {
      if(arg1 < arg2) {
        for(let i = arg1; i <= arg2; i++) {
          // console.log("valor atual de sum é:", sum, "valor atual de i é:", i)
          sum = sum + i;
        } 
        console.log("entered first loop", sum);
        return sum;
      } else if (arg1 > arg2) {
        for(let j = arg2; j <= arg1; j++) {
          // console.log("valor atual de sum é:", sum, "valor atual de j é:", j)
          sum = sum + j;
        }
        console.log("entered second loop", sum);
        return sum;
      }
    }
};

// Do not edit below this line
module.exports = sumAll;
