const arrayNumber =[20,11,40,25,37,49,9,90,60,2,19]
console.error(`----------------------------Filter()Method------------------------------------------`);
let arrayNo = arrayNumber.filter(element => element>50)
console.log(`The Number Greater than 50 in Array :- ${arrayNo}`);
console.error(`----------------------------------------------------------------------`);
let arrayEven = arrayNumber.filter(element => element%2==0)
console.log(`The Even Number in Array is :- ${arrayEven}`);
console.error(`----------------------------------------------------------------------`);
let arrayOdd = arrayNumber.filter(element => element%2!=0)
console.log(`The Odd Number in Array is :- ${arrayOdd}`);
console.error(`----------------------------------------------------------------------`);
let arrayMultiply = arrayNumber.filter(element => element%5==0)
console.log(`The Multiple of 5 Number in Array is :- ${arrayMultiply}`);
console.error(`----------------------------------------------------------------------`);
let arrayBtw = arrayNumber.filter(element => element>20 && element<50)
console.log(`The Number between 20 & 50 in Array is :- ${arrayBtw}`);
console.error(`----------------------------------------------------------------------`);


