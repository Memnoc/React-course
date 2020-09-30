/**
 * 
 */
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const circle = new Circle(10);

// Iterate or Enumerate properties
for (const key in circle) {
    if (circle.hasOwnProperty(key)) {
        const element = circle[key];
        console.log('Logging keys only:', '\n' ,key);
        console.log('Logging keys and values:', '\n', element);
    }
}

// Iterate or Enumerate properties
for (const key in circle) {
    if (typeof circle[key] !== 'function') {
        console.log('Logging keys but not methods:', '\n', key);
    }
}

// Another approach to get all keys in an object
const keys = Object.keys(circle);
console.log('Array of keys', '\n', keys);

// Know if an object has property
if('radius' in circle) {
    console.log('Circle has radius');
}