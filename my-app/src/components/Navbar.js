import React from 'react';

const Navbar = () => {
  // Local variables to store input values and result
  let num1 = 0;
  let num2 = 0;
  let result = 0;

  // Prompt the user for input
  const getNumbers = () => {
    num1 = parseFloat(window.prompt("Enter the first number:"));
    num2 = parseFloat(window.prompt("Enter the second number:"));
    return { num1, num2 };
  };

  const add = () => {
    const { num1, num2 } = getNumbers();
    if (!isNaN(num1) && !isNaN(num2)) {
      result = num1 + num2;
      alert(`The sum of ${num1} and ${num2} is ${result}`);
    } else {
      alert("Please enter valid numbers.");
    }
  };

  const subtract = () => {
    const { num1, num2 } = getNumbers();
    if (!isNaN(num1) && !isNaN(num2)) {
      result = num1 - num2;
      alert(`The difference of ${num1} and ${num2} is ${result}`);
    } else {
      alert("Please enter valid numbers.");
    }
  };

  const multiply = () => {
    const { num1, num2 } = getNumbers();
    if (!isNaN(num1) && !isNaN(num2)) {
      result = num1 * num2;
      alert(`The product of ${num1} and ${num2} is ${result}`);
    } else {
      alert("Please enter valid numbers.");
    }
  };

  const divide = () => {
    const { num1, num2 } = getNumbers();
    if (!isNaN(num1) && !isNaN(num2)) {
      if (num2 !== 0) {
        result = num1 / num2;
        alert(`The quotient of ${num1} and ${num2} is ${result}`);
      } else {
        alert("Cannot divide by zero.");
      }
    } else {
      alert("Please enter valid numbers.");
    }
  };

  return (
    <div>
      <h1>Navbar</h1>
      <button onClick={add}>Add</button>
      <button onClick={subtract}>Subtract</button>
      <button onClick={multiply}>Multiply</button>
      <button onClick={divide}>Divide</button>
    </div>
  );
};

export default Navbar;
