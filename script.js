let firstNumber = '';
let secondNumber = '';
let operator = '';

// Math functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

// Testing math functions
console.log(add(1, 2))

console.log(subtract(1, 2))

console.log(multiply(1, 2))

console.log(divide(1, 2))

// Operate function takes 3 strings, converts the number strings into ints and calls a math function from above
function operate(firstNum, secondNum, operator) {
    Number(firstNum);
    Number(secondNum);
    if (operator === '+') {
        add(firstNum, secondNum);
    } else if (operator === '-') {
        subtract(firstNum, secondNum);
    } else if (operator === '*') {
        multiply(firstNum, secondNum);
    } else if (operator === '/') {
        divide(firstNum, secondNum);
    }
}