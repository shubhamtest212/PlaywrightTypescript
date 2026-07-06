export

    // unknown
    let notSure: unknown
console.log(notSure)

// any
let anyVal1: any;

anyVal1 = 10;
anyVal1 = "Hello";
anyVal1 = true;

anyVal1()
anyVal1.toUpperCase()

// void
function myFun(): void {
    console.log('Hello SHUBHAM');
}

// union types
let peopleAllowed: number | boolean | string;
peopleAllowed = 10;
peopleAllowed = false;
peopleAllowed = 'shubham';


// function
function hello() {
    console.log('Hello Shubham Jogdand SDET Engineer')

}
 hello();


 function sum(num11:number, num22:number):number{
    return num11+num22

 }
 console.log(sum(2,2));
