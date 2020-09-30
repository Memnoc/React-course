/**
 * Bit of outdated syntax
 */

class Human {
    constructor() {
        this.gender = 'male';
    }

    printGender() {
        console.log(this.gender);
    }
}

class Person extends Human {
    constructor() {
        super();
        this.name = 'Jim';
        this.gender = 'male';
    }

    printName() {
        console.log(this.name);
    }
}

const person = new Person();
person.printName();
person.printGender();