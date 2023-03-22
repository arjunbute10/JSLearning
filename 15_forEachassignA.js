const arrayNumbers = [1,-7,40,502,-77,91,0,108,89,-601]
console.error(`--------------------------Index of Array-------------------------------------`);
console.log(`The index of arrays are :- ${arrayNumbers[0]}`);
console.log(`The index of arrays are :- ${arrayNumbers[1]}`);
console.log(`The index of arrays are :- ${arrayNumbers[2]}`);
console.log(`The index of arrays are :- ${arrayNumbers[3]}`);
console.log(`The index of arrays are :- ${arrayNumbers[4]}`);
console.log(`The index of arrays are :- ${arrayNumbers[5]}`);
console.log(`The index of arrays are :- ${arrayNumbers[6]}`);
console.log(`The index of arrays are :- ${arrayNumbers[7]}`);
console.log(`The index of arrays are :- ${arrayNumbers[8]}`);
console.log(`The index of arrays are :- ${arrayNumbers[9]}`);
console.error(`---------------------------Positive Numbers in Array---------------------------`);
arrayNumbers.forEach(currentValue => {
    if (currentValue>=0) {
        console.log(`Positive numbers is : ${currentValue}`);
    }
});
console.error(`---------------------------Negative Numbers in Array---------------------------`);
arrayNumbers.forEach(currentValue => {
    if (currentValue<=0) {
        console.log(`Negative numbers is : ${currentValue}`);
    }
});
console.error(`---------------------------Even Numbers in Array---------------------------`);
arrayNumbers.forEach(currentValue => {
    if (currentValue%2==0) {
        console.log(`Even numbers is : ${currentValue}`);
    }
});
console.error(`---------------------------Sum of Element in Array---------------------------`);
let sum = 0
arrayNumbers.forEach(currentValue => {
    sum = sum + currentValue
})
console.log(`The Sum of all element : ${sum}`);

console.error(`---------------------------Even Numbers in Array---------------------------`);
arrayNumbers.forEach((currentValue,index) => {
    if (index%2==0) {
        console.log(`Even Index numbers is : ${currentValue}`);
    }
});