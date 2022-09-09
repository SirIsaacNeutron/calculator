let displayedNumber = 0
let firstNumber = null
let secondNumber = null

let currentOperatorFunction = null

let hasHadSecondInput = false
let hasSecondInput = false

let oldFirstNumber = null

function add(n1, n2) {
    return n1 + n2
}

function subtract(n1, n2) {
    return n1 - n2
}

function multiply(n1, n2) {
    return n1 * n2
}

function divide(n1, n2) {
    return n1 / n2
}

function operate(operatorFunction, n1, n2) {
    return operatorFunction(n1, n2)
}

const displayText = document.querySelector('.display-text')
displayText.innerText = displayedNumber

function handleButtonClick(buttonValue) {
    switch (buttonValue) {
        case 'C':
            displayedNumber = 0
            hasHadSecondInput = false
            hasSecondInput = false
            firstNumber = null
            secondNumber = null
            currentOperatorFunction = null
            oldFirstNumber = null

            break
        case '+/-':
            displayedNumber *= -1
            break
        case '%':
            displayedNumber /= 100
            break
        case '9':
        case '8':
        case '7':
        case '6':
        case '5':
        case '4':
        case '3':
        case '2':
        case '1':
        case '0':
            if (firstNumber !== null && !hasSecondInput) {
                displayedNumber = 0
            }
            const number = +buttonValue // works even on negative numbers
            let stringDisplayedNum = displayedNumber.toString()

            if (number === 0) {
                if (stringDisplayedNum === '0') {
                    break
                }
                stringDisplayedNum += buttonValue
            }
            else {
                stringDisplayedNum += buttonValue
            }

            displayedNumber = +stringDisplayedNum

            if (firstNumber !== null) {
                secondNumber = displayedNumber
                hasSecondInput = true
                hasHadSecondInput = true
            }
            break
        case '/':
        case '*':
        case '-':
        case '+':
            handleOperator(buttonValue)
            break
        case '=':
            handleEqualsButton()
            break
        default:
            break
    }

    displayText.innerText = displayedNumber
}

function handleEqualsButton() {
    if (hasHadSecondInput) {
        displayedNumber = operate(currentOperatorFunction, firstNumber, secondNumber)
        hasSecondInput = false
    }
    else {
        if (oldFirstNumber === null) {
            displayedNumber = operate(currentOperatorFunction, firstNumber, firstNumber)
            oldFirstNumber = firstNumber
        }
        else {
            displayedNumber = operate(currentOperatorFunction, firstNumber, oldFirstNumber)
        }
    }
    firstNumber = displayedNumber
}

function handleOperator(operatorValue) {
    // User inputs 7, clicks X button, then =, then gets 49
    // User must be able to change operator and retain the current displayedNumber
    // That's what this if-statement does
    // Thanks to this check, users can click the + button, then = and get 98 (49 + 49)
    if (currentOperatorFunction !== null) {
        oldFirstNumber = displayedNumber

        // Update displayedNumber during lengthier calculations
        if (hasSecondInput) {
            handleEqualsButton()
            displayText.innerText = displayedNumber
        }
    }

    if (operatorValue === '/') {
        currentOperatorFunction = divide
    }
    else if (operatorValue === '*') {
        currentOperatorFunction = multiply
    }
    else if (operatorValue === '-') {
        currentOperatorFunction = subtract
    }
    else {
        currentOperatorFunction = add
    }
    firstNumber = +displayedNumber
}

let buttons = document.querySelectorAll('.button')
buttons.forEach(button => {
    const buttonValue = button.getAttribute('value')
    button.addEventListener('click', e => {
        handleButtonClick(buttonValue)
    })
})