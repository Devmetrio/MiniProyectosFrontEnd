const display = document.getElementById("display");

function appendToDisplay(input) {
    const operators = ['+', '-', '*', '/'];
    const lastChar = display.value.slice(-1);
    const currentNumberSegment = display.value.split(/[\+\-\*\/]/).pop();
  
    if (display.value === "0" && input === "0") {
        return;
    }

    // Avoid multiple decimal points in the same number
    if (input === "." && currentNumberSegment.includes(".")) {
        return;
    }
  
    // Replace the initial 0 with the new input or continue adding to the string
    if (display.value === "0" && !operators.includes(input) && input !== "." || /[A-Za-z]+/.test(display.value)) {
        display.value = input;
    } else {
        // If the current input is an operator
        if (operators.includes(input)) {
            // If the last character is also an operator
            if (operators.includes(lastChar)) {
                // If the input is "-", allow it as a negative sign
                if (input === '-') {
                    display.value += input;
                } else {
                    // Replace the last operator with the new one
                    display.value = display.value.replace(/[\+\*\/-]+$/, '') + input;
                }
            } else {
                // If the last character is not an operator, just add the input
                display.value += input;
            }
        } else {
            // If the input is a number or ".", just add too in the input
            display.value += input;
        }
    }
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "SyntaxError";
    }
}

function clearDisplay() {
    display.value = "0";
}