/**
 * Array methods: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */

const numbers = [1,2,3];

// Map
const doubleArrayNumbers = numbers.map((num) => {
    return num * 2;
});

// Shorter syntax
const doubleArrayNumbers2 = numbers.map(num => num * 2);


console.log(numbers); //[ 1, 2, 3 ]
console.log(doubleArrayNumbers); // [ 2, 4, 6 ]
console.log(doubleArrayNumbers2); // [ 2, 4, 6 ]
