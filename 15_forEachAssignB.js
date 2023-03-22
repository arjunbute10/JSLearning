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
console.error(`---------------------------Employees of TCS--------------------------------------------------`);
array_employess.forEach(employee => {
    if (employee.emp_company=="TCS") {
        console.log(`The Employee Name :-${employee.emp_name} ${employee.emp_company}`);
    }
});
console.error(`---------------------------Employees with 50000 and more--------------------------------------------------`);
array_employess.forEach(employee => {
    if (employee.emp_salary>= 50000) {
        console.log(`The Employee Details :- ${employee.emp_id} ${employee.emp_name} ${employee.emp_dept} ${employee.emp_salary} ${employee.emp_company}`);
    }
});
console.error(`---------------------------Sum of Employees Salary--------------------------------------------------`);
let sum=0
array_employess.forEach(employee => { 
   sum= sum + employee.emp_salary 
});
console.log(sum);
console.error(`---------------------------Average of Employees Salary--------------------------------------------------`);
let avagerSalary = () => console.log(sum/array_employess.length);
avagerSalary()
console.error(`---------------------------Employees of TCS--------------------------------------------------`);
array_employess.forEach(employee => {
    if (employee.emp_dept=="IT" && employee.emp_dept=="HR" || employee.emp_salary>=75000) {
        console.log(`The Employee Name :- ${employee.emp_id} ${employee.emp_name} ${employee.emp_dept} ${employee.emp_salary} ${employee.emp_company}`);
    }
});