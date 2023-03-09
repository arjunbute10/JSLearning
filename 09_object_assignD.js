let professor = {
    name : "Shankar",
    lastName: "Tirke",
    city:"Amravati",
    id:"619",
    number:"8899445566",
    degrees : {
        engineering:"CSC",
        ME:"CSC",
        PHD:'Adv Computering'
    },
    arrayCertificates :['Hacker Rank','Participation','Certificates in IFE course','Certification in Adv Programming'],
  value:function () {
    professor.degrees 
    return `Teacher degrees are ${this.degrees.engineering},${this.degrees.ME},${this.degrees.PHD}
    Total degrees are : 3`
}
}

console.error(`------------------------Adding properties to Object-----------------------------------`);
console.log(professor);
console.error(`------------------------Adding Nest Object-----------------------------------`);
console.log(professor.degrees);
console.error(`------------------------Adding Array Object-----------------------------------`);
console.log(`The Array are :- ${professor.arrayCertificates}`);
console.error(`------------------------Add Funcation as value -----------------------------------`);
let result=professor.value(professor.degrees )
console.log(result);
console.error(`------------------------Adding New Property-----------------------------------`);
professor.totalExperience="14 year"
console.log(`Total Experience is :- ${professor.totalExperience}`);
console.error(`------------------------Modify existing Property-----------------------------------`);
professor.city = "pune"
console.log(`Updated object property :- ${professor.city}`);
console.error(`------------------------Adding New Certificate-----------------------------------`);
professor.arrayCertificates[professor.arrayCertificates.push("Oracle Certifed")]
console.log(`The Array are :- ${professor.arrayCertificates}`);
console.error(`------------------------Log the last element of Array Certificates-----------------------------------`);
let lastCertificate =professor.arrayCertificates[4]
console.log(`The last Certificate is :- ${lastCertificate}`);