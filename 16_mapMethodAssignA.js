console.error(
  `-----------------------Add Ten in to each element in Array-----------------------------------`
);
const arrayNumber = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];

let newArrayNumber = arrayNumber.map((element) => {
  return element + 10;
});
console.log(`The New Array is :- ${newArrayNumber}`);
console.error(
  `-----------------------Square of each element in Array-----------------------------------`
);
let newArrayNumber2 = arrayNumber.map((element) => {
  return element ** 2;
});
console.log(`The New Array is :- ${newArrayNumber2}`);
console.error(`----------------------Add Index Value in corresponding each array--------------------------------`);
let newArrayNumber3 = arrayNumber.map((element, index) => {
  return element + index;
});
console.log(`The New Array is :- ${newArrayNumber3}`);
