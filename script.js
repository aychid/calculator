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

let number1;
let number2;
let operator;

operate = function(num1, operator, num2){
    return operator(num1,num2)
}

