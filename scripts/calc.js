
function addition(a, b) {
    return a + b;
}

function subtraction(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return b !== 0 ? a / b : Infinity; // Example handling for divide by zero
}

// Add more functions if needed

module.exports = { addition, subtraction, multiply, divide };