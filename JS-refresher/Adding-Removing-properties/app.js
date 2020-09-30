/**
 * Given objects are not classes (like in Java),
 * we can add properties on the fly with ease (unlike Java)
 * We can do this without modifying the object structure itself.
 */
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const circle = new Circle(10);

// Adding propery on the fly
circle.location = { x: 1 };

// Deleting a property on the fly
delete circle.location;