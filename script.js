// version 1 26/03/2024

const operators = {
    "+": (num1, num2) => num1 + num2,
    "-": (num1, num2) => num1 - num2,
    "x": (num1, num2) => num1 * num2,
    "÷": (num1, num2) => num1 / num2 // num2 === 0 ? "Error" : num1 / num2
};

let display = '';
let number1 = '';
let number2 = '';
let currentOperator = '';
let isNewCalculation = true;

const screen = document.querySelector(".screen");

function updateScreen() {
    screen.innerHTML = display || number1;
}

function clear() {
    display = '';
    number1 = '';
    number2 = '';
    currentOperator = '';
    updateScreen();
}

function operate(){
    if ( currentOperator === '÷' && number2 === '0' ) {
        // screen.textContent = "Error";
        // return;
        display = "Null division";
        // clear();
    }
    else {
        display = operators[currentOperator](parseFloat(number1), parseFloat(number2)).toString();
    }
    isNewCalculation = true;
    number1 = display;
    number2 = '';
    currentOperator = ''    
    updateScreen();
}

document.querySelectorAll(".number, .operator").forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;
        if (Number.isInteger(parseInt(value))) { // ADD CHECK FOR STRING FROM NULL DIVISION
            if (isNewCalculation) {
                clear();
                isNewCalculation = false;
            }
            display += value;
            if (currentOperator === '') {
                number1 += value;
            } else {
                number2 += value;
            }
        } else if (value === 'C' ) {
            clear();
        } else if (value === '=') { 
            if (number1 === '' || number2 === '') {
                return;
            } else {
                operate();      
            }
        } else {
            if (number1 === ''){
                clear();
            }
            else if (number1 !== '' && number2 !== '') {
                operate();
            }
            isNewCalculation = false;
            currentOperator = value;
            display = '';
        }
        updateScreen();
    });
});