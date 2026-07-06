export

let name = 'Shubham'
console.log(`hello ${name}`)

// Variables
let a =10;
a=20;
let x;
x=10;

let num1: number = 10;
let name1: string = 'Shubham';
let learningTypescript: boolean = true;

let u: undefined=undefined
let n: null=null

let y;
console.log(y)

// Arrays
let list1: number[] = [1,2,3]
let list2: Array<number> = [1,2,3,4]

// tuple
let tuple1:[number,string]; // declare
tuple1=[1000,'Hello'];// initialize
console.log(tuple1[1].substring(0))

// Variables and Data Types
let myName: string = 'Shubham';
myName='ShubhamS';
let age: number=27;
let isActive: boolean = true;


// let
let employeeName: String ='SHubham';
 console.log(employeeName);

 employeeName = 'Shrikant';
 console.log(employeeName)

 // const
 const company: string='Firstcry';
 console.log(company);
//  company='Brainbees';  constant is not getting change

// var
var age1: number = 25;
console.log(age1);

age1 = 27;
console.log(age1);

// Boolean
let isLoggedIn: boolean= true;
console.log(isLoggedIn);

let isQAEngineer: boolean = true;
let hasOffer: boolean = false;

console.log(isQAEngineer);
console.log(hasOffer);

// Any
let data: any = "Hello";
console.log(data);

data = 100;
console.log(data);

data = true;
console.log(data);


let result: any;
result ="Pass";
result=100;
result=false;
console.log(result);

// Unknown
let value : unknown = "Hello";
if(typeof value==="string"){
    console.log(value.toUpperCase());
}

// Array
let fruits: string[] = ["Apple","Banana","Mango"];
console.log(fruits);

// Mixed Array
let details: (String | number)[] = ["Shubham",27,"QA"];
console.log(details);

// Null
let value1: null = null;
console.log(value1);

// void- returns nothing
function printMessage(): void{
    console.log("TypeScript practice");
    console.log("Shubham Jogdand QA Engineer Have completed Master of Computer Application");
}

// call the function
printMessage();


// void by using an arrow function
const  printMessage1 = (): void=> {
    console.log("Typescript Practices for Automation QA Engineer");
};

printMessage1();

let values: unknown = "sHuBhAm";

if(typeof values==="string") {
    console.log(values.toUpperCase());

} else {
    console.log("value is not a string");
}

let valuess: unknown = "SHUBHAM";

if(typeof valuess ==="string") {
    console.log(valuess.toLowerCase());
} else {
    console.log("value is not a string");
}

// tuple
let employeeName1: [number, string] = [101,"Shubham"];
console.log(employeeName1);

// Object
let person: {
    name:string, age:number, designation:string, dob:number, education:string, subdepartment:string}={
        name:"shubham",age:27, designation:"Software Developnment Engineer in Test", dob:1999, education:"Master_of_computer_application",subdepartment:"Information Technology & Information Engineering"
    };
    console.log(person);








