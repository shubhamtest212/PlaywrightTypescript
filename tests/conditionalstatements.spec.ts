// Typescript : conditions : if statement

// The if statement in typescript is used to execute a block of code only when a specified condition is true

// if(condition){

// }

// Simple if statement
let age1: number = 26;

if (age1 >= 18) {
    console.log("you are eligible to vote");
}

// Number check
let number: number=10;

if(number>0){
    console.log("positive number");
}

// String comparision
let browser: string= "Chrome";

if(browser==="Chrome"){
    console.log("Launching Chrome Browser");
}

// Boolean condition
let isLoggedIn : boolean=true;

if(isLoggedIn){
    console.log("welcome letter");
}

// Multiple conditions using &&
let age2: number= 26;
let hasLicense: boolean=true;

if(age2>=18 && hasLicense){
    console.log("You can drive");

}

// Using || OR
let isAdmin=false;
let isManager=true;

if(isAdmin || isManager){
    console.log("Access Granted");
}



// Playwright Automation Example
import{test,expect} from '@playwright/test';

test('Login Page Title',async ({page})=> {
    await page.goto('https://www.saucedemo.com/');

    const title=await page.title();

    if(title==='Swag Labs') {
        console.log('Correct Page Opened');
    }

});



// Real-Time Automation Example
const status= "PASS";

if(status==="PASS"){
    console.log("Generate Report");
}





// Common Comparision Operators
// === and !== in Typescript because they compare both value and type


// what is an if statement?
// An if statement executes a block of code only when the specified condition evaluates to true


// what data types can be used in an if condition?
// boolean

// what is the difference between == and ===?
// == compares  values after type coercion
// === compares both value and type so it is recommended in Typescript

// can an if statement be used without an else?
// if the condition is false the code inside the if block is simply skipped.









