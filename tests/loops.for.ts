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
    { id: 1, name: "Shubham" },
    { id: 2, names: "Rahul" },
    { id: 3, namess: "Amit" }
];

for (let i = 0; i < employees.length; i++) {
    console.log(employees[i].name);
    console.log(employees[i].names);
    console.log(employees[i].namess);
}

// Nested for loop
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; i++) {
        console.log(i, j);
    }

}


// Using break
// stops the looops immedietely
for (let i = 1; i <= 10; i++) {
    if (i == 6) {
        break;
    }

    console.log(i);
}

// Using continue
// skips the current iteration
for (let i = 1; i <= 5; i++) {
    if (i == 3) {
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

// while loop
// a while loop repeatedely executes a block of code as long as specified conditio is true
// it is useful when you don't know in advance how many times the loop should run
// syntax
// while(condition) {
// code to execute
// }

// Print numbers 1 to 5
let i: number = 1;
while (i <= 5) {
    console.log(i);
    i++;
}

// Print even numbers
let nums: number = 2;
while (nums <= 10) {
    console.log(nums);
    num += 2;
}

// countdown
let count: number = 10;
while (count < 0) {
    console.log(count);
    count--;
}

// Print Array
let fruits: string[] = ["APPLE", "MANGO", "BANANA"];
let index = 0;
while (index < fruits.length) {
    console.log(fruits[index]);
    index++;
}

// SUM OF NUMBERS
let a = 1;
let sums = 0;
while (a <= 5) {
    sum += a;
    a++;
}
console.log(sums);

// Infinite loop example
let b = 1;
while (b <= 5) {
    console.log(b);
}

// while with break
let q = 1;
while (true) {
    if (q == 10) {
        break;
    }
    console.log(q);
    q++;
}

// while with continue
let s = 0;

while (s < 5) {
    s++;

    if (s == 3) {
        continue;
    }
    console.log(s);
}

// while in playwright automation
// a while loop can be useful when waiting for a condition that changes dynamically
// playwright built in auto waiting and assertions are generally preferred over cutom loops

// let retries:0;

// while(retries<3){
//     try{
//         await page.click("#submit");
//         break;
//     } catch(error) {
//         retries;
//     }
//     )
// }


// what is a while loop
// a loop that executes repeatedely while the condition remains true


// when should you use a while loop
// when the number of iterations is not known beforehand


// difference between for and while loop
// for : best when you know how many iterations are needed
// while : best when the loop continues untila  condition becomes false

// can we use break and continue with while
// break : exits the loop immediately
// continue: skips the rest of the current iteration and continues with the next one



// do while
// The do while loop executes a block of code at least once
// and then continues repeating the loop as long as the condition is true
// syntax:
// do{
// 
// } while(condition);

// Print numbers from 1 to 5
let d: number = 1;

do {
    console.log(d);
    d++;

} while (d <= 5);

// condition is false initially

let nnum: number = 10;

do {
    console.log("Executed once");
} while (nnum < 5);

// what is a do while loop?
// a do while loop executes the code block first and then checks the condition
// Therefore is always run at least once


// what is the difference between while and do while
// while checks the condition before executing the loop body
// do while checks the condition after executing the loop body

// when should you use a do while loop
// use it when the loop body must execute at least once
// login retry logic
// menu driven programs
// user input validation
// retry mechanisms in automation


// can a do while loop become an infinite loop
// yes if the condition always evaluates to true


// Print even numbers
let even: number = 2;

do {
    console.log(even);
    even += 2;
} while (even <= 10);

// SUM OF NUMBERS 1TO5
let v: number = 1;
let summ: number = 0;

do {
    sum += v;
    v++;

} while (v <= 5);
console.log("SUM=", summ);


// COUNTDOWN
let counts: number = 6;

do {
    console.log(counts);
    counts--;

} while (counts >= 1);


// INFINITE LOOP
do {
    console.log("HELLO");

} while (true);

// Reverse counting
let n = 10;

do {
    console.log(n);
    n--;
} while (n >= 1);


// Typescript loops : for in
// for in loop is used to iterate over the keys property names of an object
// it can also iterate over array indexes
// but for..of is generally preferred for arrays

for (let key in Object) {

}

// key represents the property name or array index
// object the object whose properties you want to iterate

// Iterate over an object
let emplo = {
    id: 101,
    name: "Shubham",
    role: "QA Engineer"
};

for (let key in emplo) {
    console.log(key);
}

// Print keys and values
let dd = {
    id: 1001,
    name: "Shubham Jogdand",
    role: "Automation QA Engineer"
};

for (let key in dd) {
    console.log(key + ":" + emplo[key as typeof emplo]);
}

// Iterate over an Array(Indexes)
let fruitss = ["Apple", "Mango", "Banan"];

for (let index in fruitss) {
    console.log(index);
}

// Here for..in returns the indexes not the values

// Array Index and values
let First = ["Apple", "Mango", "Banan"];

for (let index in First) {
    console.log(index + ":" + First[index]);
}


// Iterate over a string
let Name = "Shubham";

for (let index in Name) {
    console.log(index + ":" + Name[index]);


}

// what is the purpose of for..in?
// it is used to iterate over the property names(keys) of an object

// Does for..in return values
// No it returns keys or array indexes. You use the key to access the value

let obj = { name: "Shubham" };

for (let key in obj) {
    console.log(obj[key as typeof obj]);
}

// can for..in be used with arrays?
// yes but it returns indexes not values for arrays for..of is usually the better choice

// what is the difference between for..in or for..of?
// for..in- iterates over the keys/indexes
// for..of- iterates over the values

// when should you use for..in?
// enumerating object properties
// dynamically accessing the object keys

// Playwright interview questions
// suppose you store test data in an object

const loginData = {
    username: "Shubham",
    password: "Shubham123"
};

for (const key in loginData) {
    console.log(`${key}:${loginData[key as typeof loginData]}`);

}


// Typescript loop : for..of
// The for..of loop is used to iterate over the values of an iterable object such as
// Array
// String
// Map
// Set

// Iterate through an array
let browser: ["chrome", "firefox", "Edge"];

for (let browser of browsers) {
    console.log(browser);

}

// Iterate through a string
let company = "Playwright";

for(let letter of company){
    console.log(letter);
}

// Iterate through numbers Array
let numbers = [10,20,30,40];

for(let num of numbers){
    console.log(num);
}

// Key points to remember
// use for..of to iterate over values
// it works with array, string, maps, sets and other iterables
// it does not work directly with plain objects
// it is cleaner and more readable than using indexes when you only need the values

// Interview coding example
let namessss=["Shubham","Rahul","Amit"];

for(let name of namessss){
    console.log(`Hello  $ {name}`);
}






























