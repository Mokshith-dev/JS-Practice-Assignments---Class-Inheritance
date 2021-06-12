// import using require
const Shape = require("./shape");
//New comment
// declare class
class Circle extends Shape {
  calculateArea() {
    console.log("cal in circle");
  }
}

// export class using module.exports
module.exports = Circle;
