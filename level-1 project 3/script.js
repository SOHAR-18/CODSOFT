// script.js

const display = document.getElementById('display');
let currentInput = '';
let operator = '';
let firstValue = null;

document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', () => {
    const value = button.getAttribute('data-value');

    // Clear display
    if (value === 'C') {
      currentInput = '';
      operator = '';
      firstValue = null;
      display.innerText = '0';
      return;
    }

    // Handle equals operation
    if (value === '=') {
      if (firstValue !== null && operator) {
        currentInput = calculate(firstValue, currentInput, operator);
        display.innerText = currentInput;
        firstValue = null;
        operator = '';
      }
      return;
    }

    // Handle operators
    if (button.classList.contains('operator')) {
      if (operator && firstValue !== null) {
        currentInput = calculate(firstValue, currentInput, operator);
        display.innerText = currentInput;
      }
      firstValue = currentInput;
      operator = value;
      currentInput = '';
      return;
    }

    // Handle numbers and decimals
    currentInput += value;
    display.innerText = currentInput;
  });
});

// Calculation function
function calculate(first, second, operator) {
  const num1 = parseFloat(first);
  const num2 = parseFloat(second);
  switch (operator) {
    case '+':
      return (num1 + num2).toString();
    case '-':
      return (num1 - num2).toString();
    case '*':
      return (num1 * num2).toString();
    case '/':
      return num2 !== 0 ? (num1 / num2).toString() : 'Error';
    default:
      return second;
  }
}
