console.error(`-----------------------------------Function Constructor ----------------------------------------------`);
function Bank (bankName,location,ifscCode,branchchcCode) {
this.bankName = bankName
this.location = location
this.ifscCode = ifscCode
this.branchchcCode = branchchcCode
this.result=function(){
 console.log(`Details of bank :- ${this.bankName} ${this.location} ${this.ifscCode} ${this.branchchcCode}`);   
}
}
Bank.prototype.openTime= "9 AM Ist"
Bank.prototype.closeTime= "6 PM Ist"
let yesBank = new Bank ("YES Bank","Mumbai","yesN00123","YES0045")
yesBank.result()
let sbiBank =new Bank ("SBI Bank","Yavatmal","sbiN000506","SBI001")
sbiBank.result()

let axisBank =new Bank ("Maharashtra Bank","Pune","mbin001455","MAHAB0005")
axisBank.result()

let mahaBnk =new Bank ("Axis Bank","Nagpur","axis0015425","AXIS0011")
mahaBnk.result()

console.error(`-----------------------------------ADD Data Member on Prototype Object-----------------------------------`);
console.log(`Opening Time :-${sbiBank.openTime} Close Time :- ${sbiBank.closeTime} for SBI Bank`);
console.log(`Opening Time :-${axisBank.openTime} Close Time :- ${axisBank.closeTime} for Axis Bank`);
console.error(`-----------------------------------Log YES Bank Details------------------------------------------`);
console.log(`Details of YES Bank :- ${yesBank.bankName}, Breanch Code - ${yesBank.bacnchcCode} and opening time is ${yesBank.openTime}`);   
// console.log(`Opening Time :-${} Close Time :- ${yesBank.closeTime} for Yes Bank`);