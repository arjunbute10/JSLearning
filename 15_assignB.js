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
console.error(`---------------------------Array of Employees--------------------------------------------------`);
let array_employess = [emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi]
console.log(array_employess);
console.error(`--------------------------Employees Working in TCS--------------------------------------------------`);
for (const employee of array_employess) {
    if (employee.emp_company == "TCS") {
        console.log("Employees Working in TCS :-",employee.emp_name,employee.emp_company);
    }
    
    
}
console.error(`--------------------------Finance department employee---------------------------------------------------`);
for (const employee of array_employess) {
    if (employee.emp_dept==="Finance") {
        console.log(`Finance department employee :- ${employee.emp_dept} ${employee.emp_name}`);
    }
    
}
console.error(`---------------------------Start with R-----------------------------------------------`);
for (const employee of array_employess) {
    if (employee.emp_name.startsWith("R")) {
        console.log(employee);
    }
    
}
console.error(`---------------------------Employee whose salary is greater then 75000-------------------------------------------------`);
for (const employee of array_employess) {
    if (employee.emp_salary > 75000) {
        console.log(`Employee whose salary is greater then 75000 :- ${employee.emp_name} ${employee.emp_company} ${employee.emp_salary} `);
    }
}
console.error(`--------------------------Employee with salary 50000 & and in IT company-----------------------------------------------`);
for (const employee of array_employess) {
    if (employee.emp_salary>=50000 && employee.emp_dept=="IT") {
        console.log(employee);
    }
    
}

console.error(`---------------------------Employee work in Infy-------------------------------------------------`);
for (const employee of array_employess) {
    if (employee.emp_company=="Infy") {
        console.log(employee);
        
    }
    
}