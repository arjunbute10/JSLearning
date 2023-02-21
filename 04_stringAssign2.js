console.log("_____________Assignmen no.2______________");
function stringHandsOn(){
var stringHandsOn = "     Hey you are doing good, keep it up       "
console.log(stringHandsOn);  
var length = stringHandsOn.length  
console.log("Length of String",length)
console.log("---------------1-----------------");
var afterTrim =stringHandsOn.trim()
console.log("After Rmoving extra space :",afterTrim);
var trim = afterTrim.length
console.log("Length of new string :",trim);
console.log("---------------2-----------------");
console.log("Total Number extra spaces are :",stringHandsOn.length-afterTrim.length);
console.log(afterTrim.charAt(0),afterTrim.charAt(afterTrim.length-1));
console.log("---------------3-----------------");
var totalString = afterTrim.split(" ")
console.log("Total number of words are :",totalString);
console.log("---------------4-----------------");
console.log("Index of word good",afterTrim.indexOf('good'));
var sliceResult = afterTrim.slice(22)
console.log("---------------5-----------------");
console.log("Substring strating from index 22 is :",sliceResult);
afterTrim.slice(22)
console.log("---------------6-----------------");
var endWith = afterTrim.endsWith("up")
var stratWith =afterTrim.startsWith("Hey")
console.log("The string end with 'UP' :",endWith);
console.log("The string start with 'Hey':",stratWith);
}
stringHandsOn()