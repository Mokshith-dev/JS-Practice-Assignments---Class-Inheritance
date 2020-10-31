// import using require
let shapes = require('./shape');
let Shape = shapes.Shape;

class Circle extends Shape {
    constructor() {
        super(color);
    }
    calculateArea() {

    }
}
// declare class


// export class using module.exports
module.exports = {
    Circle: Circle
}