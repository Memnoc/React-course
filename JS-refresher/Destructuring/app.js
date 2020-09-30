/**
 * The destructuring assignment syntax is a JavaScript expression that 
 * makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
 */

/**
 * Array destructuring
 * The [num1, num2] at the beginning, targets the elements 0, 1 in the array, pulls them out of the array,
 * stores into the variables num1 and num2.
 */

const numbers = [1,2,3];
[num1, num2] = numbers;
console.log(num1, num2); // 1 2


// Object destructuring

const person = {
    name: 'Tony',
    age: 38,
    gender: 'male',
    surname: 'Stark',
    heroName: 'Iron Man',
    car: 'Too many',
    hobbies: 'Build cool tech',
    wife: 'Pepper Pots',
    powers: {
        armor: 'Mark 48',
        brain : 'genius',
        wealth: 'billionaire'
    },
    friends: {
        friendOne: 'Spiderman',
        friendTwo: 'Hulk',
        friendThree: 'Thor'
    }
};

// Property to variable
const { name } = person;
console.log(name); // Max

// Multiple properties
const { gender, age } = person;
console.log(gender, age); // male 28

// Default value
const {nickName = 'Strongest Avenger'} = person;
console.log(nickName); // Strongest Avenger

// Alias
const {surname: fathersName } = person;
console.log(fathersName); // Stark

// Deep property
const { powers: { armor } } = person;
console.log(armor); // Mark 48

// Deep property with multiple values
const {powers: {brain}, friends: {friendOne}} = person;
console.log(brain, friendOne); // genius Spiderman

// Dynamic name property
const prop = 'heroName';
const { [prop]: heroName} = person;
console.log(heroName); // Iron Man

// Rest object after destructuring
// car contains the value of the car property,
// while rest contains all the remaining properties
const {car, ...rest} = person;
console.log(car, rest);
/**
 * Too many {
  name: 'Tony',
  age: 38,
  gender: 'male',
  surname: 'Stark',
  heroName: 'Iron Man',
  hobbies: 'Build cool tech',
  wife: 'Pepper Pots',
  powers: { armor: 'Mark 48', brain: 'genius', wealth: 'billionaire' },
  friends: { friendOne: 'Spiderman', friendTwo: 'Hulk', friendThree: 'Thor' }
}
 */
