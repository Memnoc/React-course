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