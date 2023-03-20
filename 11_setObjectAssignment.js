console.error(`-----------------------------------------Class----------------------------------------------`);
console.error();
class Bank{
    constructor(bankName,location,accountNo,ifsc,interstRate){
             this.bankName = bankName
             this.location = location
             this.accountNo = accountNo
             this.ifsc =ifsc
             this.interstRate =interstRate
    }


}

let axisBank =new Bank ("Axis Bank","Nagpur","787465464","axis0015425",8.5)
console.log(axisBank);
let sbiBank =new Bank ("SBI Bank","Yavatmal","4654656876","sbiN000506",9)
console.log(sbiBank);
let icic_bank = new Bank ("ICICI Bank","Mumbai","4784656876","icicN00123",10)
console.log(icic_bank);
let kotak_bank =new Bank ("KOTAK Bank","Pune","46656876","koin001455",9.5)
console.log(kotak_bank);
let hdfc_bank =new Bank ("HDFC Bank","Amravati","9654656876","hdfcin001455",11.5)
console.log(hdfc_bank);
let punjab_bank =new Bank ("Punjab Bank","Satara","78954656876","koin001455",9.5)
console.log(punjab_bank);
console.error(`-----------------------------------------SETS----------------------------------------------`);

let setOfNum =new Set()
setOfNum.add(axisBank)
setOfNum.add(sbiBank)
setOfNum.add(icic_bank)
setOfNum.add(kotak_bank)
setOfNum.add(hdfc_bank)
setOfNum.add(punjab_bank)
console.log(setOfNum);

console.error(`-----------------------------------------Traverse Set----------------------------------------------`);
for (const element of setOfNum) {
    console.log(`Bank Details :- ${element.bankName} ${element.location}`);
}