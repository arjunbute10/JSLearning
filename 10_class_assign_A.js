console.error(`----------------------------------CLASS------------------------------------------------------`);
class Vehicle {
    // carName
    // company
    // fuelType
    // colour
    // transmissionType
    constructor(carName,company,fuelType,colour,transmissionType){
        this.carName=carName
        this.company=company
        this.fuelType=fuelType
        this.colour=colour
        this.transmissionType=transmissionType


    }
}
let vehicle1 = new Vehicle ("Safari","TATA","Petrol","Black","Manual")
console.log(vehicle1);
let vehicle2 = new Vehicle ("Thar","Mahindra","Diesel","Red","Manual")
console.log(vehicle2);
let vehicle3 = new Vehicle ("Creta","Hyundai","Petrol","Gray","Automatic")
console.log(vehicle3);
let vehicle4 = new Vehicle ("XUV 700","Mahindra","Petrol","Black","Automatic")
console.log(vehicle4);
let vehicle5 = new Vehicle ("Swift","Suzuki","Diesel","White","Manual")
console.log(vehicle5);
console.error(`---------------------------------------Array Traverse------------------------------------------------`);
const arrayOfVehicle=[vehicle1,vehicle2,vehicle3,vehicle4,vehicle5]
for (const element of arrayOfVehicle) {
    console.log(`Details of the Cars :- ${element.carName} , ${element.company} , ${element.fuelType}  ,${element.colour}  ,${element.transmissionType}`);
    
}
// for (let index = 0; index < arrayOfVehicle.length; index++) {
//     const element = arrayOfVehicle[index];
//     console.log(`Details of the Cars :- ${element.carName} , ${element.company} , ${element.fuelType}  ,${element.colour}  ,${element.transmissionType}`);
// }
console.error(`---------------------------CLASS OF COLLEGE-----------------------------------`);
class College{
constructor(collegeName,location,university,state){
this.collegeName=collegeName
this.location=location
this.university=university
this.state=state
}
}
const college1 = new College ("S.G.S.P.S","Akola","S.G.B.U","Maharashtra")
console.log(college1);
const college2 = new College ("V.I.I.T","Pune","S.P.P.U","Maharashtra")
console.log(college2);
const college3 = new College ("Shri Ramdeobaba college of Engineering","Nagpur","R.T.M.N.U","Maharashtra")
console.log(college3);
const college4 = new College ("J.S.P.M","Mumbai","S.P.P.U","Maharashtra")
console.log(college4);
console.error(`------------------FUNCATION USING FOR IN -------------------`);

//    arrayOfCollege = [college1,college2,college3,college4]
function tranverseObject(value) {
for (const key in value) {
    if (College.hasOwnProperty.call(value, key)) {
        const element = value[key];
        console.log(`${key}-${element}`);
        
    
    }
    
}
}
tranverseObject(college1)
tranverseObject(college2)
tranverseObject(college3)
tranverseObject(college4)


    