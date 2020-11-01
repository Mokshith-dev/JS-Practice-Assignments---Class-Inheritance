import React from "react";
class Shape extends React.Component {
  constructor(props) {
    super(props);
    this.color = "red";
  }
  drawShape() {
    console.log("drew my shape");
  }
  calculateArea() {
    console.log("calculate area in shape");
  }
}
// export class using module.exports
module.exports = Shape;
