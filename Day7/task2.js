const student = {
    firstName: "Likhith",
    age: 21,
    "last Name": "Raju"
  };
  console.log(student.firstName);
console.log(student["last Name"]);
// student.age = 20;
student.salary = 300000;
console.log(student);
delete student.age;
console.log(student);
console.log("age" in student);
console.log("firstName" in student);

for (let key in student) {
    console.log(student[key]);
  }