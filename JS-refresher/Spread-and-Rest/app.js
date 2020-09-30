/**
 * Spread ...
 * Used to split up array elements or object properties
 * Basically, adds data to an array or objec while keeping a copy of the other array.
 */
const numbers = [1,2,3];
const newNumbers = [...numbers, 4];

console.log(newNumbers);

const person = {
    name: 'Max'
}

const newPerson = {
    ...person,
    age: 28
}

console.log(newPerson);


/**
 * Rest ...
 * Used to merge a list of function arguments into an array.
 * The ... syntax allows a function to receive an unlimited amount of aguments - 
 * the arguments are then merged into an array.
 * The filter() method creates a new array with all elements that pass the test implemented by the provided function.
 */

const restFunction = (...args) => {
    return args.filter(el => el === 1);
}

console.log(restFunction(1,2,3));