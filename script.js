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
    button.addEventListener('click', () => {
        if (display === undefined && operator === undefined) {
            display = `${button.innerHTML}`;   
        }
        else if (display != undefined && operator === undefined) {
            display = display + `${button.innerHTML}`;
        }
        else if (typeof(number1) === 'number' && operator !== undefined && isNum1 === true){
            isNum1 = false;
            display = `${button.innerHTML}`;   
        } 
        else if (isNum1 == false && operator !== undefined) {
            console.log("test")
            display = display + `${button.innerHTML}`;
        } 
        else {
            alert("Error")
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
    let result = operate(number1, operator, number2)
    number1 = result
    screen.innerHTML = result
})

const addition = document.getElementById("addition")
addition.addEventListener('click', () => {
    operator = add
})

const subtraction = document.getElementById("subtraction")
subtraction.addEventListener('click', () => {
    operator = subtract
})

const multiplication = document.getElementById("multiplication")
multiplication.addEventListener('click', () => {
    operator = multiply
})

const division = document.getElementById("division")
division.addEventListener('click', () => {
    operator = divide
})

const clearButton = document.getElementById("clear")
clearButton.addEventListener('click', () => {
    screen.innerHTML = 0;
    display = undefined;
    number1 = undefined;
    operator = undefined;
    isNum1 = true;
})