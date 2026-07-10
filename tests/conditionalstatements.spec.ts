// Typescript : conditions : if statement

// The if statement in typescript is used to execute a block of code only when a specified condition is true

// if(condition){

// }

// // Simple if statement
// let age1: number = 26;

// if (age1 >= 18) {
//     console.log("you are eligible to vote");
// }

// // Number check
// let number: number = 10;

// if (number > 0) {
//     console.log("positive number");
// }

// // String comparision
// let browsers: string = "Chrome";

// if (browsers === "Chrome") {
//     console.log("Launching Chrome Browser");
// }

// // Boolean condition
// let isLoggedInn: boolean = true;

// if (isLoggedInn) {
//     console.log("welcome letter");
// }

// // Multiple conditions using &&
// let age2: number = 26;
// let hasLicense: boolean = true;

// if (age2 >= 18 && hasLicense) {
//     console.log("You can drive");

// }

// // Using || OR
// let isAdmin = false;
// let isManager = true;

// if (isAdmin || isManager) {
//     console.log("Access Granted");
// }



// // Playwright Automation Example
// import { test, expect } from '@playwright/test';

// test('Login Page Title', async ({ page }) => {
//     await page.goto('https://www.saucedemo.com/');

//     const title = await page.title();

//     if (title === 'Swag Labs') {
//         console.log('Correct Page Opened');
//     }

// });



// // Real-Time Automation Example
// const status = "PASS";

// if (status === "PASS") {
//     console.log("Generate Report");
// }





// // Common Comparision Operators
// // === and !== in Typescript because they compare both value and type


// // what is an if statement?
// // An if statement executes a block of code only when the specified condition evaluates to true


// // what data types can be used in an if condition?
// // boolean

// // what is the difference between == and ===?
// // == compares  values after type coercion
// // === compares both value and type so it is recommended in Typescript

// // can an if statement be used without an else?
// // if the condition is false the code inside the if block is simply skipped.


// // Typescript Conditional Statements : else

// // The else block is used when the if condition is false
// // it provides an alternative block of code to execute

// // syntax
// // check age

// let age: number = 27;

// if (age >= 25) {
//     console.log("Eligible to vote");
// } else {
//     console.log("Not eligible to vote");
// }

// // Number check
// let numbers: number = -10;

// if (numbers > 0) {
//     console.log("Positive number");
// } else {
//     console.log("Negative Number");
// }

// // Even or odd
// let num: number = 15;

// if (num % 2 === 0) {
//     console.log(num + "is Even");
// } else {
//     console.log(num + "is odd");
// }

// // Login status
// let isLoggedIn: boolean = false;

// if (isLoggedIn) {
//     console.log("welcome User !");
// } else {
//     console.log("Please login");
// }

// // Marks validation

// let marks = 36;

// if (marks >= 36) {
//     console.log("Pass");
// } else {
//     console.log("Faile");
// }

// // Interview Tip
// // if : Executes when the condition is true
// // else : Executes when the condition is false

// // Check Fname
// let Fname: string = "Shubham";

// if (Fname == "Shubham") {
//     console.log("Name is correct");
// } else {
//     console.log("Name is incorrect");
// }


// // Typescript : Conditional : switch
// // The switch statement is used when you need to execute different blocks of code based on the value of
// // single variable or expression
// // it is cleaner and more readable than using multiple if..else if statements

// // Print Day Name

// let day: number = 6;

// switch (day) {
//     case 1:
//         console.log("Monday");
//         break;

//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;

//     default:
//         console.log("Invalid Day");




// }

// // Launching browser
// let browser: string = "chrome";

// switch (browser) {
//     case "chrome":
//         console.log("Launching Chrome");
//         break;

//     case "firefox":
//         console.log("Launching firefox");
//         break;

//     case "Edge":
//         console.log("Launching Edge");
//         break;

//     default:
//         console.log("Browser not supported");
// }


// // Multiple Cases Fall through

// let month: number = 8;

// switch (month) {
//     case 12:
//     case 1:
//     case 2:
//         console.log("Winter");
//         break;

//     case 3:
//     case 4:
//     case 5:
//         console.log("Summer");
//         break;

//     case 6:
//     case 7:
//     case 8:
//         console.log("Monsoon");
//         break;

//     default:
//         console.log("Invalid month");
// }


// // Calculator
// let num1 = 20;
// let num2 = 30;
// let operation = "*";

// switch (operation) {
//     case "+":
//         console.log(num1 + num2);
//         break;

//     case "-":
//         console.log(num1 - num2);
//         break;


//     case "*":
//         console.log(num1 * num2);
//         break;

//     case "/":
//         console.log(num1 / num2);
//         break;

//     default:
//         console.log("Invalid operation");
// }

// what is switch statement
//  A switch statement is a conditional statement that executes  one block of code among
// many bases on the value of an expression



// Typescript : conditions : Ternary ? :
// The ternary operator is a shorthand  way of writing if..else statement
// It evaluates a condition and returns one of two values

// condition : Expression that evaluates to true or false
// expressionofTrue :   Executes if the condition is true
// expressionofFalse : Executes if the condition is false

// Basic Example
let age: number = 20;

let result = age>=21 ? "Eligible to vote" : "Not eligible";

console.log(result);

// Even or odd
let number: number=14;
let result1 = number % 2===0 ? "Even":"Odd";
console.log(result1);

// Positive or Negative
let num: number = -6;
let message = num >=0 ? "Positive":"Negative";
console.log(message);

// Find larger number
let a:  number = 20;
let b: number = 30;

let largest = a>b ? a:b;
console.log("Largest:",largest);

// Nested ternary operator
let marks : number = 20;

let grade = 
marks >= 90 ? "A":
marks >=75 ? "B":
marks >=60 ? "C":
marks >=35 ? "D":
"Fail";

console.log(grade);

// Login status
let isLoggedIn: boolean = false;

let message1 = isLoggedIn ? "welcome user" : "Please login";

console.log(message1);






