// Typescript Data Type : string
// A string is used to store textual data such as names, emails, addresses, messages



export
    let name: string = 'Shubham';
let name1 = 'Shubham';
console.log(name);
console.log(name1);

// Different ways to create strings
const fName: string = "Shubham"; // Double quotes
console.log(fName);
const FName: string = 'shubham'; // Single quotes
console.log(FName);

// Template literals(backticks)
let firstName: string = "Shubham";
let organization: string = 'Firstcry.com';
let message: string = `My name is ${firstName}, I work at ${organization}.`;
console.log(message);

// This is called String Interpolation.
// string concatenation
let firstName1: string = "Shubham";
let lastName1: string = "Jogdand";
let education: string = "MCA";

let fullName: string = firstName1 + "" + lastName1 + "" + education;
console.log(fullName);

// string properties
let language: string = 'Typescript';
console.log(language.length);// returns number of characters in the digit

// common string methods
// touppercase()
let sName = 'Shubham';
console.log(sName.toUpperCase);

// tolowercase()
let jName: string = "Shubham";
console.log(jName.toLowerCase);

// trim
const FNAME: String = " Shubham ";
console.log(FNAME.trim());

// includes
// check whether string contains another string
let email: string = "shubham@gmail.com";
console.log(email.includes("@"));

// startsWith()
let url: string = "https://www.google.com";
console.log(url.startsWith("https"));

// endsWith()
let file: string = "report.pdf";
console.log(file.endsWith(".pdf"));

// replace()
let sentence: string = "I like Java";
console.log(sentence.replace("Java", "Typescript"));


// split()
// Converts string into array.
let browsers: String = "Chrome,Firefox, Edge";
console.log(browsers.split(","));


// Typescript Data Types : NUMBER
// In TypeScript, the number data type is used to store all numeric values, including:
// Integers → 10, 100, -50
// Floating-point numbers (Decimals) → 10.5, 99.99
// Negative numbers → -250
// Scientific notation → 2.5e3 (2500)

let age: number = 26;
let salary: number = 84000;
let price: number = 99.90;

// Integer
let experience: number = 4;
console.log(experience);

// Decimal
let rating: number = 4.5;
console.log(rating);

// Negative number
const temperature: number = 12.3;
console.log(temperature);

// Arithmetics operations
let num1: number = 10;
let num2 = 20;

console.log("Addition", num1 + num2);
console.log("Substraction", num1 - num2);
console.log("Multiplication", num1 * num2);
console.log("Division", num1 / num2);
console.log("Modulus", num1 % num2);

// Increment and Decrement
let count: number = 5;

count++;
console.log(count);

count--;
console.log(count);

// Using Math Functions
let value: number = 25.75;
console.log(Math.round(value));
console.log(Math.floor(value));
console.log(Math.ceil(value));
console.log(Math.sqrt(value));
console.log(Math.pow(2, 4));


// Type inference
let marks = 89;
console.log(typeof marks);
// Typescript can automatically detect the type

// Scientific notation
let population: number = 7.8e9;
console.log(population);


// Number methods
let price1: number = 124.55545;
console.log(price1.toFixed(2));
console.log(price1.toPrecision(4));
console.log(price1.toString());

// Difference between number and bigint
let normal: number = 100;
let big: bigint = 12344575784848484;

// Real time QA Automation Examples
// Test execution count
let totalTests: number = 120;
// Passed tests
let passedTests: number = 200;
// Failed Tests
let failedTests: number = 3;
// Response time(milliseconds)
let responseTime: number = 768;
// API Status Code
let statusCode: number = 201;
// Execution Duration(Seconds)
let executionTime = 45.3;
console.log(totalTests);
console.log(statusCode);


// Boolean true or false
// Using Boolean in an if statement
let isAutomationTester: boolean = true;

if (isAutomationTester) {
    console.log("WelCome Automation QA Engineer");
} else {
    console.log("Manual QA Engineer");
}

// Function returning boolean
function isEligible(age: number): boolean {
    return age >= 18;
}
console.log(isEligible(20));
console.log(isEligible(15));


// any data type
// any is a special typescript type that allows a variable to store values of any data type without
// compile-time type checking

let variableName1: any;
let variableName2;
// If no type is specified and TypeScript cannot infer one, it may treat the variable as any (depending on compiler settings).

// store different data types
let data: any;

data = "Shubham";
console.log(data);

data = 27;
console.log(data);

data = true;
console.log(data);

data = [10, 20, 30];
console.log(data);

data = {
    name: "ShubhamJogdand",
    role: "QAEngineer"
};
console.log(data);

// Function returning any
function getValue(): any {
    return "Playwright";

}
let values = getValue();
console.log(value);

// Mixed values in an array
let details: any[] = [
    "shubham",
    27,
    true,
    8.5,
    { city: "Pune" }
]
console.log(details)

// Calling any methods
let value11: any = "Typescript";
console.log(value11.touppercase())

value11 = 200;
console.log(value.toFixed(2));

// variable is any typescript allows calling methods without checking whether they are valid or not

// why any can be dangerous
// typescript does not show a compile time error but at runtime will get

let valuessss: any = "HelloShubham";
console.log(valuessss.toFixed(2));

// This happends because hello is a string and tofixed() is exists only on numbers

// unknown
// The unknown type is type-safe-alternative to any
// it can hold any type of value but unlike any you cannot use it directly until you check or convert(narrow) it's type.
// unknown is a top type in typescript that can store any value but you must perform type checking
// before accessing properties, calling methods, or assigning it to another specific type

let val: unknown;
// cannot use without type checking
let vals: unknown = 'Playwright';
if (typeof vals === "string") { }
console.log(vals.toUpperCase());
// object is of type unknown

// correct way type narrowing
let valuesss: unknown = 'Playwright';
if (typeof valuessss === "string") {
    console.log(valuessss.toUpperCase());
}

// number check
let number: unknown = 100;
if (typeof number === "number") {
    console.log(number + 40);
}

// boolean check
let boolean: Boolean = true;

if (typeof value === "boolean") {
    console.log(!value);
}

// Array check
let test1: unknown = ["chrome", "firefox", "edge"];

if (Array.isArray(test1)) {
    console.log(test1[0]);
}

// Object check
let fc1: unknown = {
    name: "SHUBHAM",
    AGE: 27
};
if (typeof fc1 === "object" && fc1 !== null) {
    console.log(fc1);
}


// void
// The void data type in TypeScript represents the absence of a return value
// It is primarily used as the return type of functions that perform an action but do not return any value.

function functionName(): void {

}

// Function returning nothing
function printMessage(): void {
    console.log("welcome to typescript")

}
printMessage();
// The function prints a message.
// It does not return any value.
// Therefore, its return type is void.

// Function performing task
function add(a: number, b: number): void {
    console.log("sum=", a + b);
}
add(10, 20);


// Arrow function
const greet = (): void => {
    console.log("Hello QA Engineer");
}
greet();


// Function returning undefined
function test(): void {
    return;
}
test();

// This is valid because void functions can simply return; without a value.

// Object
// In TypeScript, the object data type represents any non-primitive value.
// it can store
// objects
// Arrays
// Functions
// Classes
// Dates
// it cannot store primitive values such as
// string, number, boolean, bigint, symbol, null, undefined

// syntax
let employee: Object;

// Basic object
let employee1: Object = {
    id: 101,
    name: "Shubham",
    role: "QAEngineer"
};
console.log(employee1);

// Array is an object
let browse: object = ["chrome", "firefox", "edge"];
console.log(browse);

// Function is also an object
let greet1: object = function () {
    console.log("Hello TS");
}
console.log(greet1);


// Date object
let today: object = new Date();
console.log(today);


// In Playwright automation projects, you'll usually define objects with interfaces instead of using object.
interface User {
    username: string;
    password: string;

}
const user: User = {
    username: "standard_user",
    password: "secret_sauce"
}
console.log(user.username);
console.log(user.password);

// string
// store your name and print it in uppercase

let nname: string = "shubham";
console.log(nname);
console.log(nname.toUpperCase);
console.log(nname.length);

// Number
// Find the average of threee numbers
let a: number = 20;
let b: number = 30;
let c: number = 40;

let average = (a + b + c) / 3;
console.log(average);

// Array
// print all browser name
let browserss: string[] = ["chrome", "firefox", "edge"];
for (let browser of browserss) {
    console.log(browse);
}



















