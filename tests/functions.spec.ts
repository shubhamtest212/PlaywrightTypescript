// Typescript : Function : normal

// A normal function in typescript is the most common way to define a function
// it used the function keyword and can have paramters a return type and optional default parameters

// Function Without Parameters and Without Return Value

function greet(): void {
    console.log("welcome to Typescript");
}
greet();

// void means the function does not return any value

// Function with parameters
function greetUser(name: string): void {
    console.log(" welcome " + name);

}
greetUser("shubham Jogdand");

// Function with return value
function sub(a: number, b: number): number {
    return a - b;

}
let result = sub(20, 10);
console.log(result);

// Function with multiple parameters
function employee(id: number, name: string, salary: number): void {
    console.log("ID", id);
    console.log("NAME:", name);
    console.log("SALARY", salary);
}

console.log(101, "shubham", 84000);

// Function Returning String
function fullName(first: string, last: string): string {
    return first + " " + last;
}
console.log(fullName("Shubham", "Jogdand"));


// Function Returning Boolean
function isAdult(age: number): boolean {
    return age >= 18;
}

console.log(isAdult(25));
console.log(isAdult(15));

// Function with Default Parameter
function welcome(name: string = "Guest"): void {
    console.log("Hello" + name);
}
welcome();
welcome("Shubham");

// Function with optional parameter
function student(name: string, city?: string): void {
    console.log("Name:", name);

    if (city) {
        console.log("city:", city);
    }
}

student("Shubham");
student("Rahul", "Pune");

