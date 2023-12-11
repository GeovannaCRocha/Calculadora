let currentInput = '';
let currentOperation = '';
let previousInput = '';

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function setOperation(operation) {
    if (currentInput !== '') {
        currentOperation = operation;
        previousInput = currentInput;
        currentInput = '';
        updateDisplay();
    }
}

function calculateResult() {
    if (currentInput !== '' && previousInput !== '') {
        switch (currentOperation) {
            case '+':
                currentInput = (parseFloat(previousInput) + parseFloat(currentInput)).toString();
                break;
            case '-':
                currentInput = (parseFloat(previousInput) - parseFloat(currentInput)).toString();
                break;
            case '*':
                currentInput = (parseFloat(previousInput) * parseFloat(currentInput)).toString();
                break;
            case '/':
                if (parseFloat(currentInput) !== 0) {
                    currentInput = (parseFloat(previousInput) / parseFloat(currentInput)).toString();
                } else {
                    currentInput = 'Error';
                }
                break;
        }

        currentOperation = '';
        previousInput = '';
        updateDisplay();
    }
}

function clearDisplay() {
    currentInput = '';
    currentOperation = '';
    previousInput = '';
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = currentInput;
}
