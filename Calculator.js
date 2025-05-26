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

console.log(calculator(12, 4, '*')); // 48
