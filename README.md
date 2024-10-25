# calculator

A calculator app for The Odin Project

## Pseudo Code

### Function to get two numbers and perform a math operation on them

LET num1 = GET num1 from input\
LET num2 = GET num2 from input\
LET operator = GET operator from input\

operate(num1, num2, operator) {
    IF operator = '+'\
        CALCULATE num1 + num2\
    IF operator = '-'\
        CALCULATE num1 - num2\
    IF operator = '*'\
        CALCULATE num1 * num2\
    IF operator = '/'\
        CALCULATE num1 / num2\
}

equal-button.onClick(operate(num1,num2,operator))\
DISPLAY result to output