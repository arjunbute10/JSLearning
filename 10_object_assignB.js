let bankSbi ={
    bankName:"SBI Bank",
   accountNo: 789456123,
    ifscCode :"sbiN0000506",
    branchCode:"sbi00014"
}
let bankLoction = {
    street : "State Bank Chowkh",
    city : "Yavatmal",
pinCode : 445001
}
const newBank = bankSbi
const newBankLocation= bankLoction
console.error(`--------------------Create the object banksbi------------------`);
console.log(newBank);
console.error(`------------------Create the object bankLocation---------------------`);
console.log(newBankLocation);
console.error(`----------------Clone and merge Object-----------------------`);

Object.assign(newBank,newBankLocation)
console.log(newBank);
console.error(`---------------Merged Step 1 , Step 2 & Step 4------------------------`);
let rateOfInterest = {
    homeLoanInterest:10,
    personalLoanInterest:8.5,
    dueInterest :9
}
const sbiDetails ={}
Object.assign(sbiDetails,bankSbi,bankLoction,rateOfInterest)
console.table(sbiDetails);
console.error(`---------------------------------Traversing Object ------------------------------------------------`);
function tranverseObject(value) {
    for (const key in value) {
        if ((value, key)) {
            const element = value[key];
            console.log(`${key}-${element}`);
            
        
        }
        
    }
}
tranverseObject(sbiDetails)