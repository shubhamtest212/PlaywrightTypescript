// for loop
// for loop is one of the commonly used for iterating through arrays, tables, api responses and web elements
// syntax
// for(initilization; condition; increment/decrement);

// initilization : runs once before the loop starts
// condition : checked before every iteration
// increment/decrement : runs after each iteration

// Print numbers 1 to 5
for (let i = 1; i <= 5; i++) {
    console.log(i);

}

// Print even numbers
for (let i = 2; i <= 10; i += 2) {
    console.log(i);
}

// Print odd numbers
for (let i = 1; i <= 10; i += 2) {
    console.log(i);
}

// Reverse a loop
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

// Sum of numbers
let sum = 0;
for (let i = 1; i <= 5; i++) {
    sum += i;

}
console.log(sum);

// Multiplication table
let num = 5;

for (let i = 1; i <= 10; i++) {
    console.log(`&{num} * ${i} = $ {num*i}`);

}

// Loop through an Array
let browsers = ["chrome", "edge", "safari"];

for (let i = 0; i < browsers.length; i++) {
    console.log(browsers[i]);
}

// Array of objects
let employees = [
    {id:1, name:"Shubham"},
    {id:2, names:"Rahul"},
    {id:3, namess:"Amit"}   
];

for(let i = 0; i<employees.length; i++) {
    console.log(employees[i].name);
    console.log(employees[i].names);
    console.log(employees[i].namess);
}

// Nested for loop
for(let i = 1; i<=3; i++) {
    for(let j = 1; j<=3; i++) {
        console.log(i,j);
    }

}


// Using break
// stops the looops immedietely
for(let i =1; i<=10; i++) {
    if(i==6) {
        break;
    }

    console.log(i);
}

// Using continue
// skips the current iteration
for(let i = 1; i<=5; i++) {
    if(i==3) {
        continue;

    }

    console.log(i);
}

// what is a for loop
// a for loop is used to execute a block of code repeatedely when the number of iteration is known

// what are a three parts of for loop
// initization
// condition
// Increment/Decrement

// what happens if the condition is always true
// it becomes an inifinite loop

// How is a for loop used in playwright?
// iterate through locators
// validate tables
// read api response arrays
// click multiple elements
// verify list of products links or rows

// 

















