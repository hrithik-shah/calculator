function operate(op, num1, num2) {
    resetInputs();
    switch (op) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
    }
}

function handleOnClick(e) {
    const buttonValue = e.target.textContent || e.target.innerText;
    if (buttonValue === '=') {
        if (num1 === '' || num2 === '' || op === '' || (op === '/' && num2 === '0')) {
            setScreen('Error');
            resetInputs();
            return
        }
        num1 = String(Math.round(operate(op, parseFloat(num1), parseFloat(num2)) * 10000) / 10000);
    } else if (buttonValue === '⌫') {
         if (num2 !== '') {
            num2 = num2.substring(0, num2.length - 1);
         } else if (op !== '') {
            op = '';
         } else {
            num1 = num1.substring(0, num1.length - 1);
         }
    } else if (['+', '-', '*', '/'].includes(buttonValue)) {
        if (num1 && op === '') {
            op = buttonValue;
        } else {
            return
        }
    } else if (op === '') {
        num1 = num1 ? num1 + buttonValue : buttonValue;
    } else {
        num2 = num2 ? num2 + buttonValue : buttonValue;
    }
    setScreen(num1 + op + num2);
}

function setScreen(text) {
    screen.innerText = text;
}

function resetInputs() {
    num1 = '';
    num2 = '';
    op = '';
}

let num1 = '';
let num2 = '';
let op = '';

const screen = document.querySelector(".calculator-screen");

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => button.addEventListener("click", handleOnClick))