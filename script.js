
let firstNum = null;
let secondNum = null;
let operator = null;
let currentInput = '';
let displayElement = document.querySelector('.num-display');
let defaultNum = document.getElementById('default-num');

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

// Function to handle getting a number and updating the display
function updateDisplay(input) {
    currentInput += input;
    displayElement.innerText = currentInput;

    return displayElement.innerText;
}

// Function to get numbers and operator
function getOperator(input) {

    if (currentInput !== "") {
        if (firstNum === null) {
            firstNum = Number(currentInput);
            currentInput = '';
        } else if (operator) {
            secondNum = Number(currentInput);
            firstNum = operate(firstNum, secondNum, operator);
        }
    }

    operator = input;
    currentInput = '';

}


// func to perform operation on equals click
function performOperation() {
    if (currentInput !== '' && operator) {
        secondNum = Number(currentInput);
        let result = operate(firstNum, secondNum, operator);
        displayElement.innerText = result;
        firstNum = result;
        operator = null;
        currentInput = '';
    }
}

// function to handle operations
function operate(firstNumber, secondNumber, operator) {
    if (operator === '+') {
        result = add(firstNumber, secondNumber);
    } else if (operator === '-') {
        result = subtract(firstNumber, secondNumber);
    } else if (operator === '*') {
        result = multiply(firstNumber, secondNumber);
    } else if (operator === '/') {
        result = divide(firstNumber, secondNumber);
    } else {
        console.log('ERROR');
    }
    displayElement.innerText = result;
    return result;
}


// Testing math functions
// console.log(add(1, 2))
// console.log(subtract(1, 2))
// console.log(multiply(1, 2))
// console.log(divide(1, 2))