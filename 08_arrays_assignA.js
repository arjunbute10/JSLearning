console.error(`------------------------The first and last element----------------------------------- `);
const arraysSeasonaFruits =["Banana","Orange","Apple","Mango","Water-Melon"]
console.log(`The Arrays are :-${arraysSeasonaFruits}`);
let element=arraysSeasonaFruits.shift()
let elementA=arraysSeasonaFruits.pop()
console.log(`The First furit is ${element} `);
console.log(`The last furit is ${elementA}`);
console.error(`---------------------------Add element Papaya-----------------------------------------------------`);
const arraysSeasonaFruits2 =["Banana","Orange","Apple","Mango","Water-Melon"]
console.log(`Thw arrays are;-${arraysSeasonaFruits2}`);
arraysSeasonaFruits2.unshift("papaya")
console.log(`Adding furit in arrays:-${arraysSeasonaFruits2}`);
console.error(`-----------------------------Remove Mango fro the Arrays-------------------------------------------`);
// const arraysSeasonaFruits3 =["Banana","Orange","Apple","Mango","Water-Melon"]
console.log(`Before removing:- ${arraysSeasonaFruits2}`);
let removeElement = arraysSeasonaFruits2.splice(4,1)
console.log(`After removing ;-${arraysSeasonaFruits2}`);
console.error(`-----------------------------Add element Pineapple at last position---------------------------------`);
// const arraysSeasonaFruits4 =["Banana","Orange","Apple","Mango","Water-Melon"]
console.log(`Before adding :-${arraysSeasonaFruits2}`);
arraysSeasonaFruits2.push("Pineapple")
console.log(`After adding :-${arraysSeasonaFruits2}`);
console.error(`-----------------------Insert an element Dragon fruit before water-melon-----------------------------`);
// const arraysSeasonaFruits5 =["Banana","Orange","Apple","Mango","Water-Melon"]
console.log(`Before Insert element :- ${arraysSeasonaFruits2}`);
let addElement=arraysSeasonaFruits2.splice(4,0,"Dragon fruit")
console.log(`After Insert element :- ${arraysSeasonaFruits2}`);
console.error(`-----------------------Replace element Orange with Kiwi-----------------------------`);
// const arraysSeasonaFruits6 =["Banana","Orange","Apple","Mango","Water-Melon"]
console.log(`Before Replace element :- ${arraysSeasonaFruits2}`);
let replaceElement=arraysSeasonaFruits2.splice(2,1,"Kiwi")
console.log(`After Replace element  :-${arraysSeasonaFruits2} `);
console.error(`-----------------------Log the element starting from index 1 to 4-----------------------------`);
// const arraysSeasonaFruits7 =["Banana","Orange","Apple","Mango","Water-Melon"]
console.log(`The Arrays are :- ${arraysSeasonaFruits2}`);
let indexOf1 =arraysSeasonaFruits2[1]
let indexOf2 = arraysSeasonaFruits2[2]
let indexOf3 =arraysSeasonaFruits2[3]
let indexOf4 =arraysSeasonaFruits2[4]
console.log(`The Index of 1 to 4 =${indexOf1} ${indexOf2} ${indexOf3} ${indexOf4}`);
console.error(`-----------------------Last Three Word -----------------------------`);
console.log(`The arrays are :- ${arraysSeasonaFruits2}`);
let length=arraysSeasonaFruits2.slice(arraysSeasonaFruits2.length-3)
console.log(`The last Three words is ${length}`);