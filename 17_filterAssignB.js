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
console.error(`-----------------------Employee work in TCS----------------------------------`);
let arrayCompany = array_employess.filter((employee) =>{
    if (employee.emp_company=="TCS") {
        console.log(`Employee Details :- Name: ${employee.emp_name} Company: ${employee.emp_company} `);

    }
}
)
console.error(`-----------------------Average salary of Wipro Employess----------------------------------`);
let arraSalary = array_employess.filter((employee) => { 
    return employee.emp_company=="Wipro"
    
})
let totalSalary = 0
arraSalary.forEach((element)=>{
    totalSalary= totalSalary+element.emp_salary/2
})
console.log(`Average Salary of Employess in Wipro ${totalSalary}`);
console.error(`-----------------------Average salary of Wipro & Inosys Employess----------------------------------`);

let empSalarys = array_employess.filter((employee) => {
    return ( employee.emp_company=="Wipro" || employee.emp_company=="Infy")
});
let totalSalarys =0;
empSalarys.forEach((element)=>{
    totalSalarys=totalSalarys+element.emp_salary
})
const avgs = totalSalarys / empSalarys.length
console.log(`Average salary of Wipro & Inosys Employess :- ${avgs}`);