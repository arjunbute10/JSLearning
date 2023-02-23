var java = "JavaScript"
var goolgeCh = "Google Chrome"
var deveSmart = "Developer Smart"

function squareOfWordLength(word) {
    var length = word.length
  console.log(`The given string is :${word} `);
  console.log(`The lenght of word:${length}`)
  console.log(`The squre of string id :${length**2}`);
  console.log(`*#*#*#*#**#*#*#*#*#*#*#*#*#*#**#*#*#*#**#*#*#*#*#*#*#*#`);
}
squareOfWordLength(java)
squareOfWordLength(goolgeCh)
squareOfWordLength(deveSmart)

function angularDev() {
    var angular ="I am Angular Developer"
    var length =angular.length
  var word = angular.split(" ")
  var wordCount = word.length
  console.log(`The given string :${angular}`);
  console.log(`The length of given string: ${length}`);
  console.log(`The total number of given word in string :${wordCount}`);
  console.log(`The result of string lenght divide by total number word is :${length/wordCount}`);
console.log(`The result of string lenght multiplication by total number of word is ${length*wordCount}`);
   
}
angularDev()
