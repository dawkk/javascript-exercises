const ftoc = function(celc) {
  const convertToCelc = ((celc - 32) * 5/9 );
  // return Math.round(convertToCelc);
  return parseFloat(convertToCelc.toFixed(1));
};

const ctof = function(far) {
  const convertToFar = ((far * 9/5) + 32);
  // return Math.round(convertToFar);
  return parseFloat(convertToFar.toFixed(1));

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
