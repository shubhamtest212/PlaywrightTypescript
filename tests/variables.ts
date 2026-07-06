// Variables in Typescript
// let : when the value may change then we can use it let variable

export

let name: string = "Shubham";
let age: number = 27;
let salary: number = 90000;

name = "shubham";
age = 26;
salary = 850000;

console.log(name);
console.log(age);
console.log(salary);

// characterisitcs of let
// a variable declared with let is accessible only inside the block({}) where is it declared
// the value of let variable can be change
// cannot be redeclared in the same scope
let company = "FC";
// let company ="BB";

// different blocks can have the same variable name
let language = "Javascript";

{
    let language = "Typescript";
    console.log(language);
}
console.log(language);

// Temporal Dead Zone (TDZ)
// A let variable exists from the start of the block but cannot be used before its declaration.
console.log();
let employee = "ShubhamJogdand";
// This is incorrect and will show error ReferenceError: Cannot access 'employee' before initialization

let employee1 = "SHUBHAMJOGDAND";
console.log(employee1);

// Not Attached to the Global Object
// Unlike var, let does not become a property of the global object.
let username = "Admin";
console.log(window.username);

// Real-Time QA Automation Examples
// Example 1: Browser Name

let browser = "Chrome";
browser = "Edge";
console.log(browser)

// Example 2: Test Status
let testStatus = "Running";
testStatus = "Passed";
console.log(testStatus);

// Example 3: Login User
let loggedInUser = "Admin";
console.log(loggedInUser);
loggedInUser = "Manager";
console.log(loggedInUser);

// Example 4: Counter
let count = 0;
count++;
count++;
console.log(count);


// variable : const
// const is used to declare a variable whose reference cannot be reassigned
// It is the preferred choice for values that should not change after initialization.
const variableName="Shubham";

// Must be initialized when declared
const names ="Shubham";
const namess; // Error

// Cannot be reassigned
const city ="washim";
city="Pune"; // Error

// Block scoped
// A const variable is only accessible within the block {} where it is declared.
{
    const company ="FC";
    console.log(company); 
}

console.log(company); // ReferenceError

// string
const fName: string="Shubham";
console.log(fName);

// Number
const numberL: number =1;
console.log(numberL);

// Boolean
const isAutomationEngineer: boolean= true;
console.log(isAutomationEngineer);

// Array
const browsers: string[] = ["chrome", "firefox", "Edge", "Safari"];
console.log(browser);

// Object
const employees = {
    id:6674,
    name:"Shubham",
    experience:4
};

console.log(employee);

// Objects Can Be Modified
// const prevents changing the reference, not the contents.

const employeeD ={
    name:"ShubhamJogdand",
    experience:5
};

employeeD.experience=4;
console.log(employee);


// Arrays Can Be Modified
const fruits = ["Apple", "Mango"];
fruits.push("Banana"); // This is allowed to modified the values of array
console.log(fruits);
// But Reassigning the Array is Not Allowed

// When to Use const
// Use const when:
// The variable value should not be reassigned.
// Declaring configuration values.
// Creating arrays and objects that won't point to a different reference.


// Is const immutable? Explain with examples.
// No. const is not immutable.
// A const variable cannot be reassigned
// if it stores an object or array, the contents of that object or array can still be modified.






















