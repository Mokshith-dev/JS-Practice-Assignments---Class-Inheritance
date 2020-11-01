import React from "react";
class Shape extends React.Component {
  constructor(props) {
    super(props);
    this.color = "blue";
  }
  drawShape() {
    console.log("Drawing shape");
  }
  calculateArea() {
    console.log("cal area");
  }
}
module.exports = shape;
