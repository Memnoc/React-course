/**
 * Object-literal: a collection of key-value pairs
 * Circle object has 3 members: radius, location, draw.
 * If a member is a function, it's defined method.draw() is a method.
 * Members are generally defined as properties, but in OOP there must be a distinction.
 */
const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: function() {
        console.log('draw');
    }
};

circle.draw();