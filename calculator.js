let displayedNumber = 0
let firstNumber = null
let secondNumber = null

const MODES = {
    OPERATOR: 'operator', // when user clicks an operator button
    INPUT: 'input' // when user is typing numbers 0-9
}

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
        case "C":
            displayedNumber = 0
            break
        case "+/-":
            displayedNumber *= -1
            break
        case "%":
            displayedNumber /= 100
            break
        case "9":
        case "8":
        case "7":
        case "6":
        case "5":
        case "4":
        case "3":
        case "2":
        case "1":
        case "0":
            const number = +buttonValue // works even on negative numbers
            let stringDisplayedNum = displayedNumber.toString()
            if (number === 0) {
                if (stringDisplayedNum === "0") {
                    break
                }
                stringDisplayedNum += buttonValue
            }
            else {
                stringDisplayedNum += buttonValue
            }

            displayedNumber = +stringDisplayedNum
            break
        default:
            break
    }

    displayText.innerText = displayedNumber
}

let buttons = document.querySelectorAll('.button')
buttons.forEach(button => {
    const buttonValue = button.getAttribute('value')
    button.addEventListener('click', e => {
        console.log(buttonValue)
        handleButtonClick(buttonValue)
    })
})