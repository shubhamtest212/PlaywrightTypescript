import strict from "node:assert/strict";
import { Interface } from "node:readline";

export let name = 'Shubham';
console.log(`hello ${name}`);
// Variables
let a = 10;
a = 20;
let x;
x = 10;
let num1 = 10;
let name1 = 'Shubham';
let learningTypescript = true;
let u = undefined;
let n = null;
let y;
console.log(y);
// Arrays
let list1 = [1, 2, 3];
let list2 = [1, 2, 3, 4];
// tuple
let tuple1; // declare
tuple1 = [1000, 'Hello']; // initialize
console.log(tuple1[1].substring(0));
// Variables and Data Types
let myName = 'Shubham';
myName = 'ShubhamS';
let age = 27;
let isActive = true;
// let
let employeeName = 'SHubham';
console.log(employeeName);
employeeName = 'Shrikant';
console.log(employeeName);
// const
const company = 'Firstcry';
console.log(company);
//  company='Brainbees';  constant is not getting change
// var
var age1 = 25;
console.log(age1);
age1 = 27;
console.log(age1);
// Boolean
let isLoggedIn = true;
console.log(isLoggedIn);
let isQAEngineer = true;
let hasOffer = false;
console.log(isQAEngineer);
console.log(hasOffer);
// Any
let data = "Hello";
console.log(data);
data = 100;
console.log(data);
data = true;
console.log(data);
let result;
result = "Pass";
result = 100;
result = false;
console.log(result);
// Unknown
let value = "Hello";
if (typeof value === "string") {
    console.log(value.toUpperCase());
}
// Array
let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits);
// Mixed Array
let details = ["Shubham", 27, "QA"];
console.log(details);
// Null
let value1 = null;
console.log(value1);
// void- returns nothing
function printMessage() {
    console.log("TypeScript practice");
    console.log("Shubham Jogdand QA Engineer Have completed Master of Computer Application");
}
// call the function
printMessage();
// void by using an arrow function
const printMessage1 = () => {
    console.log("Typescript Practices for Automation QA Engineer");
};
printMessage1();
let values = "sHuBhAm";
if (typeof values === "string") {
    console.log(values.toUpperCase());
}
else {
    console.log("value is not a string");
}
let valuess = "SHUBHAM";
if (typeof valuess === "string") {
    console.log(valuess.toLowerCase());
}
else {
    console.log("value is not a string");
}
// tuple
let employeeName1 = [101, "Shubham"];
console.log(employeeName1);
// Object
let person = {
    name: "shubham", age: 27, designation: "Software Developnment Engineer in Test", dob: 1999, education: "Master_of_computer_application", subdepartment: "Information Technology & Information Engineering"
};
console.log(person);


// interface

interface employee{
    firstName:String,
    lastName:String,
    ID:number

}
function getEmployees(empDetails: employee) {
    console.log(empDetails.firstName);
    console.log(empDetails.lastName);
    console.log(empDetails.ID);

}
getEmployees({
    firstName: 'Shubham',
    lastName: 'Jogdand',
    ID: 1122
})