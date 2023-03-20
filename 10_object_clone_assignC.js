console.error(`------------------------------Arrays--------------------------------------------------------------`);
const arrayNums = [20,3,4,56,90,400,49]
arrayNums.push(55,56)
console.log(`Orignal Array :- ${arrayNums}`);
const newarray = arrayNums
console.log(`Clone Array :- ${newarray}`);
console.error(`-----------------------------Perform Deep cloning-------------------------------------------------`);
let deepClone=[...arrayNums]
arrayNums.push(10,25)
console.log(`Orignal Array with adding value :- ${arrayNums}`);
console.log(`Deep clone value :- ${deepClone}`);
console.error(`-----------------------------Merged using Spread Operator------------------------------------------`);
const arrayEven= [2,30,14,8]
let resultArray=[...arrayNums,...arrayEven]
console.log(`After Concat Arrays :- ${resultArray}`);
console.error(`-----------------------------Employee Information--------------------------------------------------`);
const employee_info = {
    emp_id : 27,
    emp_name : "John doe",
    salary:{
        july_month:"40,0000INR",
        aug_month : "50,0000INR",
        jun_month : "65,0000INR"
    },
    address:{
        locality:{
            colony : "OM Varindavan Society",
            street : "Kanch pokli, 431202",

        },
        city:"Mumbai",
        state: "Maharashtra",
        country :"India"
    },
    mobiles: ["+91 8600 3456 88 ","1800-4567 32","+91-9096 5678 77"]
}
console.log("Address",employee_info.address.locality,employee_info.address.city,employee_info.address.state,employee_info.address.country);
console.log(employee_info.mobiles);
console.error(`--------------------------------Use JSON Update Salayer-------------------------------------------------`);
const newEmployee = JSON.parse(JSON.stringify(employee_info))
newEmployee.salary.july_month = "80,000INR"
console.log(`Old july month  :- ${employee_info.salary.july_month}`);
console.log(`july month updated :- ${newEmployee.salary.july_month}`);
console.error(`--------------------------------Use JSON Update Country-------------------------------------------------`);
newEmployee.address.country = "United kingdom"
console.log(`Country Name :- ${employee_info.address.country}`);
console.log(`Country Name Updated :- ${newEmployee.address.country}`);