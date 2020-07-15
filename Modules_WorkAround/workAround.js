// import Employee from './employee';
 // importing/exporting by variable name, no object reference needed.
const Employee = require('./employee.js')

function getEmployeeInformation(inputSalary) {
    salary = inputSalary;
    console.log('Cadre: ' + Employee.getCadre());
    console.log('Tax: ' + Employee.calculateTax());
    console.log('Benefits: ' + Employee.getBenefits());
    console.log('Bonus: ' + Employee.calculateBonus());
    console.log('Reimbursement Eligibility: ' + Employee.reimbursementEligibility() + '\n');
  }
  
  getEmployeeInformation(10000);
  getEmployeeInformation(50000);
  getEmployeeInformation(100000);
  


//! initial code, need to refactor it referencing the imported object with its properties/methods.
// function getEmployeeInformation(inputSalary) {
//     salary = inputSalary;
//     console.log('Cadre: ' + getCadre());
//     console.log('Tax: ' + calculateTax());
//     console.log('Benefits: ' + getBenefits());
//     console.log('Bonus: ' + calculateBonus());
//     console.log('Reimbursement Eligibility: ' + reimbursementEligibility() + '\n');
//   }
  
//   getEmployeeInformation(10000);
//   getEmployeeInformation(50000);
//   getEmployeeInformation(100000);
  