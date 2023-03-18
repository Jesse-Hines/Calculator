const screen = document.querySelector('.screen');
const buttons = document.querySelectorAll('button');
let currentInput = '';
let previousInput = '';
let operator = '';
let result = '';

function handleNumberClick(e) {
    currentInput += e.target.textContent;
    screen.textContent += e.target.textContent;
}

function handleOperatorClick(e) {
    if (operator) {
        handleEqualsClick();
        previousInput = currentInput;
    } else {
        previousInput = screen.textContent;
    }
    operator = e.target.textContent;
    currentInput = '';
    screen.textContent += operator;
}


function handleDecimalClick() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        screen.textContent = currentInput;
    }
}

function handleClearClick() {
    currentInput = '';
    previousInput = '';
    operator = '';
    screen.textContent = '';
}

function handleSqrtClick() {
    result = Math.sqrt(parseFloat(currentInput));
    screen.textContent = result;
    currentInput = result.toString();
    previousInput = '';
    operator = '';
}

function handleFactorialClick() {
    const input = parseFloat(currentInput);

    if (Number.isInteger(input)) {
        let factorial = 1;
        for (let i = 1; i <= input; i++) {
            factorial *= i;
        }
        screen.textContent = factorial;
        currentInput = factorial.toString();
        previousInput = '';
        operator = '';
    } else {
        let gamma = function(n) {
            let g = 7;
            let p = [
                0.99999999999980993,
                676.5203681218851,
                -1259.1392167224028,
                771.32342877765313,
                -176.61502916214059,
                12.507343278686905,
                -0.13857109526572012,
                9.9843695780195716e-6,
                1.5056327351493116e-7,
            ];
            if (n < 0.5) {
                return Math.PI / (Math.sin(Math.PI * n) * gamma(1 - n));
            } else {
                n -= 1;
                let x = p[0];
                for (let i = 1; i < g + 2; i++) {
                    x += p[i] / (n + i);
                }
                let t = n + g + 0.5;
                return Math.sqrt(2 * Math.PI) * Math.pow(t, n + 0.5) * Math.exp(-t) * x;
            }
        };
        let factorial = gamma(input + 1);
        screen.textContent = factorial.toFixed(15);
        currentInput = factorial.toString();
        previousInput = '';
        operator = '';
    }
}

function handleNegativeClick() {
    const input = parseFloat(currentInput);
    const negatedInput = -1 * input;
    screen.textContent = negatedInput;
    currentInput = negatedInput.toString();
}

let mode = "DEG";
let previousText = "";

function handleChangeMode() {
    if (mode === "DEG") {
        mode = "RAD";
    } else {
        mode = "DEG";
    }
    screen.textContent = mode;
    setTimeout(() => {
        screen.textContent = previousText;
    }, 1000);
}

function handleSin() {
    const input = parseFloat(currentInput);
    let result;
    if (mode === "DEG") {
        result = Math.sin(input * (Math.PI / 180));
    } else {
        result = Math.sin(input);
    }
    screen.textContent = result;
    currentInput = result.toString();
}

function handleCos() {
    const input = parseFloat(currentInput);
    let result;
    if (mode === "DEG") {
        result = Math.cos(input * (Math.PI / 180));
    } else {
        result = Math.cos(input);
    }
    screen.textContent = result;
    currentInput = result.toString();
}

function handleTan() {
    const input = parseFloat(currentInput);
    let result;
    if (mode === "DEG") {
        result = Math.tan(input * (Math.PI / 180));
    } else {
        result = Math.tan(input);
    }
    screen.textContent = result;
    currentInput = result.toString();
}



function handlePowerClick() {
    operator = '^';
    previousInput = currentInput;
    currentInput = '';
    screen.textContent += '^';
}

function handleNaturalLogClick() {
    result = Math.log(parseFloat(currentInput));
    screen.textContent = result;
    currentInput = result.toString();
    previousInput = '';
    operator = '';
}

function handlePiClick() {
    currentInput = Math.PI.toString();
    screen.textContent = currentInput;
}

function handleEulerClick() {
    currentInput = Math.E.toString();
    screen.textContent = currentInput;
}

function handleAbsoluteValue() {
    const input = parseFloat(currentInput);
    const absoluteValue = Math.abs(input);
    screen.textContent = absoluteValue;
    currentInput = absoluteValue.toString();
}

function handleLog10() {
    const input = parseFloat(currentInput);
    const result = Math.log10(input);
    screen.textContent = result;
    currentInput = result.toString();
}

function handleEqualsClick() {
    if (operator === '+') {
        result = parseFloat(previousInput) + parseFloat(currentInput);
    } else if (operator === '-') {
        result = parseFloat(previousInput) - parseFloat(currentInput);
    } else if (operator === '*') {
        result = parseFloat(previousInput) * parseFloat(currentInput);
    } else if (operator === '/') {
        result = parseFloat(previousInput) / parseFloat(currentInput);
    } else if (operator === '^') {
        result = Math.pow(parseFloat(previousInput), parseFloat(currentInput));
    }
    screen.textContent = result;
    currentInput = result.toString();
    previousInput = '';
    operator = '';
}

buttons.forEach(button => {
    button.addEventListener('click', e => {
        if (e.target.classList.contains('number')) {
            handleNumberClick(e);
        } else if (e.target.classList.contains('operator')) {
            handleOperatorClick(e);
        } else if (e.target.classList.contains('decimal')) {
            handleDecimalClick();
        } else if (e.target.classList.contains('clear')) {
            handleClearClick();
        } else if (e.target.classList.contains('sqrt')) {
            handleSqrtClick();
        } else if (e.target.classList.contains('factorial')) {
            handleFactorialClick();
        } else if (e.target.classList.contains('power')) {
            handlePowerClick();
        } else if (e.target.classList.contains('negative')) {
            handleNegativeClick();
        } else if (e.target.classList.contains('ln')) {
            handleNaturalLogClick();
        } else if (e.target.classList.contains('e')) {
            handleEulerClick();
        } else if (e.target.classList.contains('pi')) {
            handlePiClick();
        } else if (e.target.classList.contains('abs')) {
            handleAbsoluteValue();
        } else if (e.target.classList.contains('mode')) {
            handleChangeMode();
        } else if (e.target.classList.contains('sin')) {
            handleSin();
        } else if (e.target.classList.contains('cos')) {
            handleCos();
        } else if (e.target.classList.contains('tan')) {
            handleTan();
        } else if (e.target.classList.contains('Log10')) {
            handleLog10()
        } else if (e.target.classList.contains('equals')) {
            handleEqualsClick();
        }
    });
});