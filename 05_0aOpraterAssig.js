
console.log(`------------------------------FIND THE GREATER NUMBER AMONGST TOW NUMBER---------------------------------`);
function greaterNumber(value1,value2) {
   var result = value1>value2 ?value1 :value2
   console.log(`The Greater number is ${result}`);

}
greaterNumber(10,-10)
greaterNumber(800,899)
console.log(`------------------------------CHECK EVEN & ODD NUMBER---------------------------------`);
function isEvenOrOddNum(number) {
    var result = number%2==0?"True":"False"
    console.log(`The Given number is even  : ${result}`);

}
isEvenOrOddNum(29)
isEvenOrOddNum(44)
isEvenOrOddNum(0)
isEvenOrOddNum(101)
console.log(`------------------------------CHECK EVEN & ODD LENGTH---------------------------------`);
function wordLength (value) {
    var valueLength = value.length
   var result = valueLength%2==0?"Even ":"Odd"
   return result

}
var result = wordLength("JavaScript")
console.log(`The Given Word Length JavaScript is: ${result}`);

var result = wordLength("Google")
console.log(`The Given Word Length is Google: ${result}`);

var result = wordLength("Developer")
console.log(`The Given Word Length is: Developer ${result}`);