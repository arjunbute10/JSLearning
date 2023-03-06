console.error(
  `------------------COUNT OF THE TOTAL NUMBER OF VOWELS------------------------`
);
var num = function (vowels) {
  var count = 0;
  for (let index = 0; index < vowels.length; index++) {
    var char = vowels.charAt(index);
    if (
      char == "a" ||
      char == "e" ||
      char == "i" ||
      char == "o" ||
      char == "u" ||
      char == "A" ||
      char == "E" ||
      char == "I" ||
      char == "O" ||
      char == "U"
    ) {
      count = count + 1;
    }
  }
  return count;
};
var result = num(`JavaScript is the language of internet`);
console.log(
  `1.The number of vowels present in JavaScript is the language of internet is ${result}`
);
var result = num(`I am Angular Developer`);
console.log(
  `2.The number of vowels present in I am Angular Developer ${result}`
);
var result = num(`Hard work and commitment is the key of success`);
console.log(
  `3.The number of vowels present in Hard work and commitment is the key of success ${result}`
);
console.error(
  `------------------COUNT THE TOTAL NUMBER OF CHARACTERS IN LAST WORD------------------------`
);

function lastWordCount(words) {
  var count = 0;
  for (let index = words.length - 1; index > 0; index--) {
    var char = words.charAt(index);
    if (char == " ") {
      break;
    }
    count = count + 1;
  }
  return count;
}
var result = lastWordCount(`JavaScript is the language of internet`);
console.log(
  `The Number of last word present in JavaScript is the language of internet ${result}`
);
var result = lastWordCount(`I am Angular Developer`);
console.log(
  `The Number of last word present I am Angular Developer ${result} `
);
var result = lastWordCount(`Hard work and commitment is the key of success`);
console.log(
  `The Number of last word present Hard work and commitment is the key of success ${result}`
);
