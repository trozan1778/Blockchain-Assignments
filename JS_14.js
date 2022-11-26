// 1. Write a JavaScript program to:
// a) filter employees according to department = IT
// b) filter employees who earn a salary < 65000
// Sample Input:
// let employees = [
// {
// "id": 1,
// "name":"Abhinav",
// "department":"IT",
// "Salary":75000
// },
// {
// "id": 2,
// "name":"Gaurav",
// "department":"Sales",
// "Salary":52000
// },
// {
// "id": 3,
// "name":"Raj",
// "department":"IT",
// "Salary":64000
// }]
// Output:
// [
// {
// "id": 1,
// "name":"Abhinav",
// "department":"IT",
// "Salary":75000
// },
// {

// "id": 3,
// "name":"Raj",
// "department":"IT",
// "Salary":64000
// }
// ]
// [
// {
// "id": 2,
// "name":"Gaurav",
// "department":"Sales",
// "Salary":52000
// },
// {
// "id": 3,
// "name":"Raj",
// "department":"IT",
// "Salary":64000
// }
// ]

const result_department = employees.filter(department)
function department(employee){
  return employee.department=="IT";
}
console.log(result_department);

const result_salary = employees.filter(salary)
function salary(employee){
  return employee.Salary<65000;
}
console.log(result_salary);

// 2. Write a JavaScript program to filter the hospitals according to:
// a) Number of Beds > 200
// b) Availability of Beds = Yes
// c) Location = Pune

// Sample Input:
// let hospitals = [
// {
// "id": 1,
// "name":"Hospital A",
// "location":"Delhi",
// "noOfBeds":450,
// “availability”:”Yes”
// },
// {
// "id": 2,
// "name":"Hospital B",

// "location":"Pune",
// "noOfBeds":150,
// “availability”:”No”
// },
// {
// "id": 3,
// "name":"Hospital
// C",
// "location":"Pune",
// "noOfBeds":350.
// “availability”:”Yes”
// }]
// Output:
// [
// {
// "id": 1,
// "name":"Hospital
// A",
// "location":"Delhi",
// "noOfBeds":450,
// “availability”:”Yes”
// },
// {
// "id": 3,
// "name":"Hospital
// C",
// "location":"Pune",
// "noOfBeds":350,
// “availability”:”Yes”
// }
// ]
// [
// {
// "id": 1,
// "name":"Hospital
// A",
// "location":"Delhi",

// "noOfBeds":450,
// “availability”:”Yes”
// },
// {
// "id": 3,
// "name":"Hospital
// C",
// "location":"Pune",
// "noOfBeds":350,
// “availability”:”Yes”
// }
// ]
// [
// {
// "id": 2,
// "name":"Hospital B",
// "location":"Pune",
// "noOfBeds":150,
// “availability”:”No”
// },
// {
// "id": 3,
// "name":"Hospital
// C",
// "location":"Pune",
// "noOfBeds":350,
// “availability”:”Yes”
// }
// ]

const beds_result = hospitals.filter(beds);
function beds(hospital){
  return hospital.noOfBeds>200;
}
console.log(beds_result)

const avail_result = hospitals.filter(avail);
function avail(hospital){
  return hospital.availability=="Yes"
}
console.log(avail_result)

const pune_result = hospitals.filter(pune);
function pune(hospital){
  return hospital.location=="Pune"
}
console.log(pune_result)