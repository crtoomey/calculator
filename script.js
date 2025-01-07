
let firstNum = null;
let secondNum = null;
let operator = null;
let currentInput = '';
let displayElement = document.querySelector('.num-display');

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
function modulo(a, b) {
    return a % b;
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

// function to make number positive or negative
function makePositiveOrNegative() {
    // num = currentInput;
    // num * -1;
    // currentInput = num;
    currentInput = operate(currentInput, -1, '*')
}

// function to add decimal
function addDecimal() {
    if (currentInput % 1 === 0) {
        currentInput += '.';
        displayElement.innerText = currentInput;
    } else {
        document.getElementById("decimal-button").disabled = true;
    }

}

// func to perform operation on equals click
function performOperation() {
    if (currentInput !== '' && operator) {
        secondNum = Number(currentInput);
        let result = operate(firstNum, secondNum, operator);
        if (isFloat(result) === true) {
            displayElement.innerText = result.toFixed(5);
        } else if (isFloat(result) === false) {
            displayElement.innerText = result;
        }
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
        if (secondNumber === 0) {
            result = 'Can\'t divide by 0!'
        } else {
            result = divide(firstNumber, secondNumber);
        }
    } else if (operator === '%') {
        result = modulo(firstNumber, secondNumber);
    } else {
        console.log('ERROR');
    }

    if (isFloat(result) === true) {
        displayElement.innerText = result.toFixed(5);
    } else if (isFloat(result) === false) {
        displayElement.innerText = result;
    }

    return result;
}

// function to clear all data from calc
function clearData() {
    console.log('Clear!')
    firstNum = null;
    secondNum = null;
    operator = null;
    currentInput = '';
    displayElement.innerText = '';
    console.log(firstNum, secondNum, operator)
}

// function to check if a number is a float (for rounding)
function isFloat(n) {
    return Number(n) === n && n % 1 !== 0;
}


// Testing math functions
// console.log(add(1, 2))
// console.log(subtract(1, 2))
// console.log(multiply(1, 2))
// console.log(divide(1, 2))
// console.log(modulo(11, 3))
