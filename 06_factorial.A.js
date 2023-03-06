console.error(`----------------------------------Factorial of Number------------------------------------`);
function factorialOfNumber(num) {
    let factorial=1
    for (let index = num; index >=1; index--) { //6*5*4*3*2*1
      factorial=factorial*index
}
if (num==null ||num== undefined || num == 0) {
return `is invaild please give valid number`
    
}


    return factorial
}
var result = factorialOfNumber(6)
console.log(`Factorial of 6 is ${result}`);
var result = factorialOfNumber(3)
console.log(`Factorial of 3 is ${result}`);
var result = factorialOfNumber(null)
console.log(`Factorial of null is ${result}`);
var result = factorialOfNumber(8)
console.log(`Factorial of 8 is ${result}`);
var result = factorialOfNumber(undefined)
console.log(`Factorial of undefine is ${result}`);
var result = factorialOfNumber(9)
console.log(`Factorial of 9 is ${result}`);
var result = factorialOfNumber(0)
console.log(`Factorial of 0 is ${result}`);
console.error(`-------------------------------------------------------------------------------------------------------`);