/**
 * Constructor property is the concept that every Object in Javascript
 * has a constructor property, and that property refers to the function
 * used to create that object
 */

/**
 * Factory function
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
/**
 * result for console-calling circle.constructor
 * ƒ Object() { [native code] }
 */
circle.draw();

/**
 * Constructor function
 */
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const anotherCircle = new Circle(1);
anotherCircle.draw();
/**
 * result for console-calling anotherCircle.constructor
 * ƒ Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}
 */