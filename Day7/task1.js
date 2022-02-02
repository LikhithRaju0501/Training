let salaryArr = [20000, 30000, 35000, 12000, 40000, 44000];
console.log("Emp salary:", salaryArr);

let twoMonthsSalary = salaryArr.map((item) => item * 2);
console.log("Emp Salary received in 2nd month:", twoMonthsSalary);

let highSalaries = salaryArr.filter((item) => item > 35000);
console.log("Emp with salary more than 35k:", highSalaries);

let sumSalaries = salaryArr.reduce((res, item) => {
  return res + item;
}, 0);

console.log("Emp total salary for a month:", sumSalaries);
