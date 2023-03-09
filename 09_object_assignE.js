console.error(`--------------------------------SBI BANK-------------------------------------------------`);
let sbiBank = {
    bankName:"SBI Bank",
    location:"Yavatmal",
    accountNo:"123456789",
    ifsc:"sbiN0000506",
    interstRate:"4%",
showDetails:function () {
    console.log(` ${`Bank Name :-${sbiBank.bankName},Location${sbiBank.location},Account.No:${sbiBank.accountNo},IFSC Code${sbiBank.ifsc},Rate of Intersest${sbiBank.interstRate}`}`);
}

}
sbiBank.showDetails()
console.error(`--------------------------------AXIS BANK---------------------------------------------------------------`);
let axisBank = {
    bankName:"Axis Bank",
    location:"Amravati",
    accountNo:"987654321",
    ifsc:"axis0000405",
    interstRate:"3.5%",
    showDetails:function () {
        console.log(` ${`Bank Name :-${axisBank.bankName},Location${axisBank.location},Account.No:${axisBank.accountNo},IFSC Code${axisBank.ifsc},Rate of Intersest${axisBank.interstRate}`}`);
    }

}
axisBank.showDetails()
console.error(`---------------------------------HDFC BANK--------------------------------------------------------------`);
let hdfcBank ={
    bankName:"HDFC Bank",
    location:"Nagpur",
    accountNo:"4665123154",
    ifsc:"hdfcIN0012",
    interstRate:"3%",
    showDetails:function () {
        console.log(` ${`Bank Name :-${hdfcBank.bankName},Location${hdfcBank.location},Account.No:${hdfcBank.accountNo},IFSC Code${hdfcBank.ifsc},Rate of Intersest${hdfcBank.interstRate}`}`);
    }
}
hdfcBank.showDetails()

console.error(`-------------------------------YES BANk-----------------------------------------------------`);
let yesBank={
    bankName:"YES Bank",
    location:"Wardha",
    accountNo:"46513154615",
    ifsc:"yesiN005454",
    interstRate:"2%",
    showDetails:function () {
        console.log(` ${`Bank Name :-${yesBank.bankName},Location${yesBank.location},Account.No:${yesBank.accountNo},IFSC Code${yesBank.ifsc},Rate of Intersest${yesBank.interstRate}`}`);
    }
}
yesBank.showDetails()
console.error(`-----------------------------------------------------------------------------------------------------`);