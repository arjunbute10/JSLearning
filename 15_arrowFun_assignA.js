console.error(`-----------------------Arrow Function with no args and no return value-------------------------`);
let greet = () => console.log(`Good morning, Today is Monday`);
greet()
console.error(`-----------------------Arrow Function with Three args and no return value-------------------------`);
let value =(num1,num2,num3=1) => {
let multipl = num1*num2*num3
console.log(`The multiplication of value is ${multipl}`);
}
value(5,5,2)
value(10,4)
console.error(`-----------------------Arrow Function with Five args and return value-------------------------`);
let addition =(value1,value2,value3,value4,value5) => {
let sum = value1+value2+value3+value4+value5
return sum
}
let result = addition(100,100,200,349,756)
console.log(`The Addition of Five Argunment :- ${result}`);
let result2 =addition("I am"," learning"," ES6"," Feature"," in depth")
console.log(`The Sum Of value is :- ${result2}`);