/**
 * Value Types (primitives):   Reference Types (objects)
 * 
 * Number           Objects
 * String           Function
 * Boolean          Array
 * Symbol
 * null
 * undefined
 */

/**
 * Primitives are copied by their value
 * They get their own space in memory
 * That's why x can be updated to 20
 * But y stays 10, as originally assigned
 */
let x = 10;
let y = x;

x = 20;
// x = 20
// y = 10


/**
 * Objects are copied by their reference
 * They share the same space in memory
 * That's why, when the object is modified the change is visible to the other variable
 */
let p = {value: 10};
let z = p;

p.value = 20;
// p = 20
// z = 20

// Another example of primitves not changing value
// number is not increased - 10, despite the number++
let number = 10;

function increase(number) {
    number++;
}

increase(number);
console.log(number);

// Another example of reference types changing value
// number is increased - 11
let obj = { value: 10 };

function increase(obj) {
    obj.value++;
}

increase(obj);
console.log(obj);