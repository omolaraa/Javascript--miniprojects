// indexOf
function isPangram(sentence) {
 sentence = sentence.toLowerCase();
 const alphabets = 'abcdefghijklmnopqrstuvwxyz';
 for (let char of alphabets) {
  if (sentence.indexOf(char) === -1) {
   return false;
  }
 }
 return true;
}
console.log(isPangram('The five boxing wizards jump quickly'))

// includes
function isPangram(sentence) {
 sentence = sentence.toLowerCase();
 const alphabets = 'abcdefghijklmnopqrstuvwxyz';
 for (let char of alphabets) {
  if (!sentence.includes(char)) {
   return false;
  }
 }
 return true;
}
console.log(isPangram('The five boxing wizards jump quickly'))