import React from "react";
import * as calc from "./../calculator.js";
// import { add, subtract, mulitply, divide } from "./../calculator.js";

function App() {
  return (
    <ul>
      <li>{calc.add(1, 2)}</li>
      <li>{calc.multiply(2, 3)}</li>
      <li>{calc.subtract(7, 2)}</li>
      <li>{calc.divide(5, 2)}</li>
    </ul>
  );
}

export default App;
