/**
 * In Javascript, functions are objects.
 * n JavaScript, functions are first-class objects, because they can have properties and methods just like any other object. 
 * What distinguishes them from other objects is that functions can be called. In brief, they are Function objects.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions#:~:text=Values%20can%20be%20passed%20to,just%20like%20any%20other%20object.&text=In%20brief%2C%20they%20are%20Function,the%20JavaScript%20guide%20about%20functions.
 */
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const anotherCircle = new Circle(1);