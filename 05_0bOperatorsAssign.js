console.log(`-------------------------------------Step.1--------------------------------------`);
function maleMarriageEligibility(gender,age,boyName) {
    var result = (gender=="male" && age>=21) ?`Hey ${boyName} Eligiable for Marriage`:`Hey ${boyName}Not Eligiable for Marriage`
    return result
}
var result = maleMarriageEligibility("male",25,"Billgates");
console.log(result);

var result = maleMarriageEligibility("male",17,"Stew Jobs");
console.log(result);
console.log(`-------------------------------------Step.2--------------------------------------`);
function femaleMarriageEligibility(gender,age,girlName) {
    var result = (gender=="Female" && age>=18) ?`Hey ${girlName} Eligiable for Marriage`:`Hey ${girlName} Not Eligiable for Marriage`
    return result
}
var result = femaleMarriageEligibility("Female",16,"Jenifer");
console.log(result);

var result = femaleMarriageEligibility("Female",27,"Malinda Gates");
console.log(result);
