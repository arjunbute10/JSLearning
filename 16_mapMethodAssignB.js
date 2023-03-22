class Employee {
    constructor(emp_id,emp_name,emp_dept,emp_salary,emp_company){
    this.emp_id   =emp_id
    this.emp_name =emp_name
    this.emp_dept =emp_dept
    this.emp_salary =emp_salary
    this.emp_company= emp_company
    }
}
const emp_anil = new Employee(22,"Anil","IT",50000,"TCS")
const emp_radha =new Employee(33,"Radha","HR",74000,"Wipro")
const emp_rishi = new Employee(55,"Rishi","Finance",47000,"TCS")
const emp_sonali=new Employee(66,"Sonali","Finance",45000,"Infy")
const emp_monika = new Employee(77,"Monika","IT",40000,"Wipro")
const emp_viny= new Employee(88,"Vinayak","IT",75000,"TCS")
const emp_mahi = new Employee(99,"Mahesh","HR",85000,"Infy")
let array_employess = [emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi]
console.error(`------------------------------------------------------------`);
let newArray = array_employess.map((element)=>{
return element.emp_name
})
console.log(`Name Of Employee is :- ${newArray}`);
console.error(`------------------------------------------------------------`);
let newArray2 = array_employess.map((element)=>{
 return element.emp_dept
 })
    console.log(`Name Of Employees Department is :- ${newArray2}`);
    console.error(`------------------------------------------------------------`);
  let newArray3 = array_employess.map((element)=>{
        return element.emp_id
        })
           console.log(`ID's Of Employees   is :- ${newArray3}`);

           console.error(`------------------------------------------------------------`);
           let newArray4 = array_employess.map((element)=>{
            if (element.emp_company=="TCS") {
                return element.emp_name
            }
            })
            console.log(`Name of Employees work in TCS :- ${newArray4}`);