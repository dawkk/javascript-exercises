const removeFromArray = function(...args) {
  const array = args[0];
  return array.filter(val => !args.includes(val))

  
};

// this passed first test
//return arr.filter(f => f !== item)

//an attempt of logic to go through all the array results and match it with the removable results and splice whichever matches - it failed :(
  // let fullArray =  Array.from(arguments);
  // let removableItems = fullArray.filter(f => f !== arr);
  // console.log("These are removable", removableItems);
  // console.log("This is full array", fullArray);

  // for(let i = arr.length -1; i > 0; i--) {
  //   for(let j = removableItems.length -1; i > 0; i--) {
  //     if(arr[i] === removableItems[j]){
  //       arr.splice(i, 1);
  //     }
  //   }
  //   console.log(arr)
  // }


// Do not edit below this line
module.exports = removeFromArray;
