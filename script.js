const operators = {
    "+": (num1, num2) => num1 + num2,
    "-": (num1, num2) => num1 - num2,
    "x": (num1, num2) => num1 * num2,
    "÷": (num1, num2) => num2 === 0 ? "Error" : num1 / num2
};

let display = '';
let number1 = '';
let number2 = '';
let currentOperator = '';

const screen = document.querySelector(".screen");

function updateScreen() {
    screen.innerHTML = display || '0';
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

    number1 = display;
    number2 = '';
    currentOperator = '';
    updateScreen();
}

document.querySelectorAll(".number, .operator").forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;
        if (Number.isInteger(parseInt(value))) {
            display += value;
            if (currentOperator === '') {
                number1 += value;
            } else {
                number2 += value;
            }
        } else if (value === 'C' ) {
            clear();
        } else if (value === '=') {
            operate();
        } else {
            currentOperator = value;
            display = '';
        }
        updateScreen();
    });
});

// operate = function(num1, operator, num2){
//     if (operator == division && num2 == 0 ) {
//         alert("Null division")
//     }
//     else {
//         return operator(num1,num2)
        
//     }
// }


// const numButtons = document.querySelectorAll(".number")
// var isNum1 = true;

// numButtons.forEach(button => {
//     button.addEventListener('click', () => { // TODO fix numbers not resetting properly and refactor to be more clean
        
//         if (display === undefined && isNum1 === true) {
//             display = `${button.innerHTML}`;   
//         }
//         else if (display != undefined && isNum1 === true) {
//             display = display + `${button.innerHTML}`;
//         }
//         else if (display === undefined && isNum1 === false ){
//             display = `${button.innerHTML}`;   
//         } 
//         else if (display != undefined && isNum1 == false) {
//             display = display + `${button.innerHTML}`;
//         } 
//         else {
//             alert("Error 404")
//         }

//         screen.innerHTML = display

//         if (operator === undefined) {
//             number1 = parseFloat(display);
//         }
//         else {
//             number2 = parseFloat(display);
//         }
//     })
// })

// const equalButton = document.querySelector(".equal")
// equalButton.addEventListener('click', () => {
//     let result = operate(number1, operator, number2);
//     number1 = result;
//     screen.innerHTML = result;
// })

// const addition = document.getElementById("addition")
// addition.addEventListener('click', () => {
//     operator = add;
//     isNum1 = false;
//     display = undefined;
// })

// const subtraction = document.getElementById("subtraction")
// subtraction.addEventListener('click', () => {
//     operator = subtract;
//     isNum1 = false;
//     display = undefined;
// })

// const multiplication = document.getElementById("multiplication")
// multiplication.addEventListener('click', () => {
//     operator = multiply;
//     isNum1 = false;
//     display = undefined;
// })

// const division = document.getElementById("division")
// division.addEventListener('click', () => {
//     operator = divide;
//     isNum1 = false;
//     display = undefined;
// })

// const clearButton = document.getElementById("clear")
// clearButton.addEventListener('click', () => {
//     screen.innerHTML = 0;
//     display = undefined;
//     number1 = undefined;
//     number2 = undefined
//     operator = undefined;
//     isNum1 = true;
// })