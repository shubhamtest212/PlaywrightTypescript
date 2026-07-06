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
// console.log(tuple1[1].substring(0));
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
// data = 100;
console.log(data);
// data = true;
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
    name: "shubham", age: 27
};
console.log(person);
// variables i.e. let, const & var
let namse = 'Shubham'; // block scoped, value can be changed
const organizationName = 'Firstcry.com'; // block scoped, value cannot be reassigned
var age1 = 27; // function scoped
// why is var not recommended
// function scoped
// causes unexpected bugs
// can be redeclared
// hoisting confusion
if (true) {
    var city = "Pune";
}
console.log(city);
// Difference between let & const
let salary = 70000;
salary = 84000;
const organizationName1 = "Firstcry.com";
// organizationName1="Brainbees LTD";  // Error will occured
// Data types interview questions
// string
// number
// boolean
// bigint
// symbol
// null
// undefined
let name11 = "Shubham";
let age11 = 27;
let isQAEngineer1 = true;
// what are non-primitive data types?
// Array
// Object
// Function
// Tuple
// Enum
let browsers = ["chrome", "firefox"];
// Difference between any and unknown
// any
let valuesss = 100;
valuesss = "Hello";
valuesss = "true";
console.log(valuesss.toUpperCase);
// No type checking.
// unknown
let valuessss = "Playwright";
if (typeof valuessss === "string") {
    console.log(valuessss.toUpperCase());
}
// Needs type checking before use.
// unknown is safer because it forces type checking.
// What is the never type?
// Used when a function never returns.
function throwError() {
    throw new Error("Invalid");
}
// Difference between null and undefined
let aa = null;
let bb = undefined;
// null-intentionally empty
// undefined- value not assigned
// what is void
// function returning nothing
function printName() {
    console.log("ShubhamJogdand");
}
// what is tuple
// Stores fixed number of elements with different data types.
let employee = [101, "Shubham"];
// what is enum
var Month;
(function (Month) {
    Month[Month["January"] = 0] = "January";
    Month[Month["February"] = 1] = "February";
    Month[Month["March"] = 2] = "March";
})(Month || (Month = {}));
console.log(Month.January);
// Difference between Array and Tuple
// ARRAY
let marks = [10, 20, 30];
// TUPLE
let emp = [101, "SHUBHAM"];
// WHAT IS TYPE INTERFACE
// Typescript automatically identifies the type
let agess = 26;
// No need to write
let agesss = 26;
// Enum
var colour;
(function (colour) {
    colour[colour["Red"] = 10] = "Red";
    colour[colour["Blue"] = 11] = "Blue";
    colour[colour["Green"] = 12] = "Green";
})(colour || (colour = {}));
;
// let c:colour = colour.Green
// console.log(c)
let colourName = colour[7];
console.log(colourName);
// unknown
let notSure;
console.log(notSure);
