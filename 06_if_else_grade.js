function voteEligibility(age) {
    if (age<=0 || age==undefined || age== null || age>100) {
        return console.log(`Your age is not valid : ${age} Please put valid input`);
        
    }
        
    
   
    if (age>=18) { 
       console.log( `Your are eligible for vote "${age}"`);
        
    }
     else{
        console.log(`Your are Not eligible for voting ${age}`);
     }
}
voteEligibility(45)
voteEligibility(17)
voteEligibility(8)
voteEligibility(20)
voteEligibility(-10)
voteEligibility(200)
voteEligibility(0)
voteEligibility(undefined)
voteEligibility(null)
  
console.log(`-------------------------------------------------------Step 2---------------------------------------------------------------`);
function gradeCalculation(marks) {
    if (marks<=0 || marks  > 100 || (typeof marks!="number"|| marks== NaN) ){
     console.log(`Please provide valid marks ${marks}`);
    }
    // if(marks<=0 || marks > 100 || (typeof marks!= "number")){
    //      console.log(`Please provide the valid marks - ${marks}`); 
    //     } 
 if (marks>=90) {
    console.log(`Funtastic marks : ${marks} Your Grade is A+`);
    
 }
 if (marks>=75 && marks<90) {
    console.log(`Excellent marks : ${marks} Your Grade is A`);
 }
 if (marks>=50 && marks<75) {
    console.log(`Good mark : ${marks} Your Grade is B`);
 }
 if (marks>=35 && marks<50) {
    console.log(`Marks is :${marks} Need to improvement`);
 }
}
gradeCalculation(98)
gradeCalculation(80)
gradeCalculation(90)
gradeCalculation(0)
gradeCalculation(150)
gradeCalculation(-7)
gradeCalculation(35)
gradeCalculation(29)
gradeCalculation(64)
gradeCalculation(49)
gradeCalculation("91")
gradeCalculation("Eighty")
gradeCalculation(NaN)
gradeCalculation(null)
