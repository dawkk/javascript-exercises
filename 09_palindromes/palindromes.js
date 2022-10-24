const palindromes = function (word) {

  // Regex to remove all other characters unwanted let regex = /[\W_]/g
  let removesSpecialCharRegex = /[^A-Za-z0-9]/g;
  let formatWord = word.toLowerCase().replace(removesSpecialCharRegex, '');
  let wordBackwards = formatWord.split('').reverse().join('');

  return wordBackwards === formatWord;
};

// Do not edit below this line
module.exports = palindromes;
