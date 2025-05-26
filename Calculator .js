// Simple calculator I made while learning JavaScript

function calculator(a, b, operator) {
  if (operator === '+') {
    return a + b;
  } else if (operator === '-') {
    return a - b;
  } else if (operator === '*') {
    return a * b;
  } else if (operator === '/') {
    return b !== 0 ? a / b : "Can't divide by zero!";
  } else {
    return "Invalid operator";
  }
}

// Example usage
console.log(calculator(10, 5, '+')); // 15

