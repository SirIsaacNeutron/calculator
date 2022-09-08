let displayedNumber = 0

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

let displayScreen = document.querySelector('.display')
displayScreen.innerText = displayedNumber

let buttons = document.querySelectorAll('.button')
buttons.forEach(button => {
    const value = button.getAttribute('value')
    button.addEventListener('click', e => {
        console.log(value)
    })
})