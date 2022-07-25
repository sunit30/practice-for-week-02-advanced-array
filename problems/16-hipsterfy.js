/*

Write a function `hipsterfy(sentence)` that takes in a sentence string and
returns the sentence where every word is missing it's last vowel.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(hipsterfy('When should everyone wake up?')); // 'Whn shold everyon wak p?'
console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'

*/

let removeLastVowel = function (word) {
  // Your code here
  let arr = word.split("");
  let vowelIndex = arr.reduce(function (accum, currentVal, currentIndex) {
    if ("aeiou".includes(currentVal) || "AEIOU".includes(currentVal)) {
      return currentIndex;
    } else return accum;
  }, -1);
  arr[vowelIndex] = "";
  return arr.join("");
};

let hipsterfy = function (sentence) {
  // Your code here
  let arr = sentence.split(" ");
  let newArr = [];
  arr.forEach(function (val) {
    newArr.push(removeLastVowel(val));
  });
  return newArr.join(" ");
};

// alternative solution using Array.map
// let hipsterfy = function(sentence) {
//     return sentence.split(' ').map(removeLastVowel).join(' ');
// };

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = hipsterfy;
} catch (e) {
  module.exports = null;
}
