let firstNumberElement = document.querySelector('.first-number');
let secondNumberElement = document.querySelector('.second-number');
let operatorElement = document.querySelector('.operator');
let result = document.querySelector('.result');
let firstNumber = firstNumberElement.innerText;
let secondNumber = secondNumberElement.innerText;
let operator = operatorElement.innerText;
let operatorButtonClicked = false;
// turn the strings of numbers into number types
// firstNumber = Number(firstNumber);
// secondNumber = Number(secondNumber);


console.log(firstNumber);
console.log(secondNumber);
console.log(operator);

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

// Functions to track numbers and the operator (this is terrible code I am sorry but this is how I got it to work. Might fix later)
function operatorHasBeenClicked(op) {
    console.log(op);
    return operatorButtonClicked = true, operatorElement.innerText = op, operator = op;
}

function updateFirstNum(num) {
    return firstNumber = num;
}

function updateSecondNum(num) {
    return secondNumber = num;
}


// function to get the input of numbers
function getInput(input) {
    let firstInput = 0;
    let secondInput = 0;
    if (operatorButtonClicked === false) {
        firstInput = input;
        firstNumberElement.innerText += firstInput;
        updateFirstNum(firstNumberElement.innerText);
        console.log(firstNumber);
        return firstNumberElement.innerText;
    } else if (operatorButtonClicked === true) {
        secondInput = input;
        secondNumberElement.innerText += secondInput;
        updateSecondNum(secondNumberElement.innerText);
        console.log(secondNumber);
        return secondNumberElement.innerText;
    }
}

// Operate function takes 3 strings, converts the number strings into ints and calls a math function from above
function operate(firstNum, secondNum, operator) {
    console.log(firstNum, secondNum, operator);
    let output = '';
    Number(firstNum);
    Number(secondNum);
    if (operator === '+') {
        output = add(firstNum, secondNum);
        output.toString();
    } else if (operator === '-') {
        output = subtract(firstNum, secondNum);
        output.toString();
    } else if (operator === '*') {
        output = multiply(firstNum, secondNum);
        output.toString();
    } else if (operator === '/') {
        output = divide(firstNum, secondNum);
        output.toString();
    }
    return result.innerText = output;
}