// import using require
const Shape = require("./shape");

// declare class
class circle extends Shape {
  calculateArea() {
    console.log("calculate area in circle");
  }
}

// export class using module.exports
module.exports = circle;
