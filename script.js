
let firstNum = 0;
let secondNum = 0;
let operator = '';
let displayElement = document.querySelector('.num-display');
let defaultNum = document.getElementById('default-num');
let operatorHasBeenClicked = false;

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

    defaultNum.style.display = "none";
    displayElement.innerText += input;


    return displayElement.innerText;
}

// Function to get a number
function getOperator(input) {
    operator = input;
    console.log(operator);
    if (operatorHasBeenClicked === false) {
        firstNum = displayElement.innerText;
        Number(firstNum);
        displayElement.innerText = '';
        console.log("first num is " + firstNum);
        operatorHasBeenClicked = true;
    } else if (operatorHasBeenClicked === true) {
        secondNum = displayElement.innerText;
        Number(secondNum);
        console.log("second num is " + secondNum);
        operatorHasBeenClicked = false;
        operate(firstNum, secondNum, operator)
    }

}




// function to handle operations
function operate(firstNumber, secondNumber, operator) {
    Number(firstNumber);
    Number(secondNumber);
    let result = 0;
    displayElement.innerText = '';
    if (operator === '+') {
        result = add(firstNumber, secondNumber);
        displayElement.innerText = result;
    } else if (operator === '-') {
        result = subtract(firstNumber, secondNumber);
        displayElement.innerText = result;
    } else if (operator === '*') {
        result = multiply(firstNumber, secondNumber);
        displayElement.innerText = result;
    } else if (operator === '/') {
        result = divide(firstNumber, secondNumber);
        displayElement.innerText = result;
    } else {
        console.log('ERROR');
    }
}


// Testing math functions
console.log(add(1, 2))
console.log(subtract(1, 2))
console.log(multiply(1, 2))
console.log(divide(1, 2))