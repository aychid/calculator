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

operate = function(num1, operator, num2){
    if (operator == division && num2 ==0 ) {
        alert("Null division")
    }
    else {
        return operator(num1,num2)
    }
}

const screen = document.querySelector(".screen")
const numButtons = document.querySelectorAll(".number")

numButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (number1 === undefined ) {
            number1 = parseFloat(`${button.innerHTML}`);
            screen.innerHTML = number1;
        }
        else {
            number2 = parseFloat(`${button.innerHTML}`);
            screen.innerHTML = number2;            
        }
    })
})

const equalButton = document.querySelector(".equal")
equalButton.addEventListener('click', () => {
    let result = operate(number1, operator, number2)
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
    number1 = undefined;
})