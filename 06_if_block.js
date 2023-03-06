console.log(`Start`);
var num =10
if (num>10) {
    console.log(`inside if`);
    console.log(`Number id positive ${num}`);
}
console.log(`End`);
var ageForvote = 20
if (ageForvote>=18) {
    console.log(`you are eligiable for vote`);
    console.log(`Age is : ${ageForvote}`);
}


function checkEvanODD(num) {
    if (num%2==0) {
        return "Evan"
    }
    if (num%2!=0) {
        return"odd"
    }

}
var result = checkEvanODD(45)
console.log(`Given number 45 is ${result}`);
var result = checkEvanODD(70)
console.log(`Given number 70 is ${result}`);

var num1 = 5
if (num1>0) {
console.log(`Number is ${num1} positive`);    
} else {
    console.log(`Number is ${num1} Negitive`)
}
