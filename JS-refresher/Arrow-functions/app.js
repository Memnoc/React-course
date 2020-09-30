/**
 * First example
 * Solves a lot of issue with the this keyword
 * When this is used inside an arrow function it always keeo the contect and not change it at runtime
 */

const myFunction = () => {
    console.log('Hello world');
}

/**
 * Sample function
 * When there is one argument, () can be omitted
 * You need () if no arguments are passed
 */

const printName = name => {
    console.log(name);
}
printName("Max"); // Max

// With arguments
const printNameAndAge = (name, age) => {
    console.log(name, age);
}
printNameAndAge("Max", 23); // Max 23

// With return statement and number
const multiply = (number) => {
    return number * 2;
}
console.log(multiply(2));  // 4

// Shorter syntax
// No {}, no () and no return needed
const shorterMultiply = number => number * 2;
console.log(shorterMultiply(2));  // 4

