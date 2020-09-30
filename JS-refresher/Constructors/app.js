/**
 * If objects contain methods, it is said they have a behaviour.
 * Duplicating objects with behaviours using object literals is not a good idea.
 * Solution is to use a factory function
 */
function createCircle(radius) {
    return {
        radius,
        draw: function() {
            console.log('draw');
        }
    }
}

const circle = createCircle(1);
circle.draw();

/**
 * Let's use a constructor instead.
 * Uppercase convention.
 * Constructor uses this as a reference to the object that is executing the code
 */
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}
// 1. new keyword creates an empty object {}
// 2. new keyword sets this to point to that object
// 3. new keyword returns the object from the constructor function
const anotherCircle = new Circle(1);