import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [result, setResult] = useState("");
  function inputHandler() {
    var year = parseInt(event.target.value);

    var result;
    if (String(year).length === 4) {
      if (year % 4 === 0) {
        if (year % 100 === 0) {
          if (year % 400 === 0) result = "You are a leap year born!";
          else result = " You are not born in leap year!";
        } else result = "You are a leap year born!";
      } else {
        result = " You are not born in leap year!";
      }
    } else result = "Enter a valid year";
    setResult(result);
  }

  return (
    <div className="App">
      <h1> Were you born on a leap year?</h1>
      <h2> Enter your year of birth below to find out!</h2>
      <input onChange={inputHandler} />

      <h3> {result} </h3>
    </div>
  );
}
