/**
 * Modern syntax
 */

class Human {
    gender = 'male';
    printGender = () => console.log(this.gender);
}

class Person extends Human {
    name = 'Jim';
    gender = 'male';
    printName = () => console.log(this.name);
}

const person = new Person();
person.printName();
person.printGender();