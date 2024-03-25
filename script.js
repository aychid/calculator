add = function(num1, num2){
    return num1 + num2;
}

subtract = function(num1,num2){
    return num1 - num2
}

multiply = function(num1,num2){
    return num1 * num2
}

divide = function(num1,num2){
    return num1 / num2
}

var number1;
var number2;
var operator;
let display;

operate = function(num1, operator, num2){
    if (operator == division && num2 == 0 ) {
        alert("Null division")
    }
    else {
        return operator(num1,num2)
        
    }
}

const screen = document.querySelector(".screen")
const numButtons = document.querySelectorAll(".number")
var isNum1 = true;

numButtons.forEach(button => {
    button.addEventListener('click', () => { // TODO fix numbers not resetting properly and refactor to be more clean
        
        if (display === undefined && isNum1 === true) {
            display = `${button.innerHTML}`;   
        }
        else if (display != undefined && isNum1 === true) {
            display = display + `${button.innerHTML}`;
        }
        else if (display === undefined && isNum1 === false ){
            display = `${button.innerHTML}`;   
        } 
        else if (display != undefined && isNum1 == false) {
            display = display + `${button.innerHTML}`;
        } 
        else {
            console.log("Error2")
        }

        screen.innerHTML = display

        if (operator === undefined) {
            number1 = parseFloat(display);
        }
        else {
            number2 = parseFloat(display);
        }
    })
})

const equalButton = document.querySelector(".equal")
equalButton.addEventListener('click', () => {
    let result = operate(number1, operator, number2);
    number1 = result;
    screen.innerHTML = result;
})

const addition = document.getElementById("addition")
addition.addEventListener('click', () => {
    operator = add;
    isNum1 = false;
    display = undefined;
})

const subtraction = document.getElementById("subtraction")
subtraction.addEventListener('click', () => {
    operator = subtract;
    isNum1 = false;
    display = undefined;
})

const multiplication = document.getElementById("multiplication")
multiplication.addEventListener('click', () => {
    operator = multiply;
    isNum1 = false;
    display = undefined;
})

const division = document.getElementById("division")
division.addEventListener('click', () => {
    operator = divide;
    isNum1 = false;
    display = undefined;
})

const clearButton = document.getElementById("clear")
clearButton.addEventListener('click', () => {
    screen.innerHTML = 0;
    display = undefined;
    number1 = undefined;
    number2 = undefined
    operator = undefined;
    isNum1 = true;
})