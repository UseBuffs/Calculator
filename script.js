const numberButtons = document.querySelectorAll('[number]')
const operationButtons = document.querySelectorAll('[operation]')
const ceButton = document.querySelector('[clearEntry]')
const delButton = document.querySelector('[delete]')
const equalsButton = document.querySelector('[equals]')
const inputDisplay = document.querySelector('.input')
const outputDisplay = document.querySelector('.output')
const outputOperation = document.querySelector('.operation')


numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        appendNumber(button.innerText)
        updateDisplay()
    })})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        operationSelect(button.innerText)
        updateDisplay()
    })})

equalsButton.addEventListener('click', () => {
    calculate()
    updateDisplay()
    })

ceButton.addEventListener('click', () => {
    resetCalculator()
    updateDisplay()
    outputOperation.innerText = ''
    })

delButton.addEventListener('click', () => {
    deleteLast()
    updateDisplay()
    })

resetCalculator = function() {
    input =''
    output= ''
    operation = undefined
    }

appendNumber = function(number) {
    if(number === '.' && input.includes('.')) return
    input = inputDisplay.innerText.toString() + number.toString()

    }

updateDisplay = function(){
    inputDisplay.innerText = input
    outputDisplay.innerText = output
    }

operationSelect = function(operation){
    this.operation = operation
    outputOperation.innerText = operation
    if (inputDisplay.innerText === '') {
        return
    }
    if (inputDisplay.innerText !== '' && outputDisplay.innerText !=='') {
       calculate()
    }
    else {
        output = input.toString()
        input = ''
    }
    
    }

calculate = function() {
    if (input === '') {
        return
    }
    let result
    a = parseFloat(output)
    b = parseFloat(input)
    switch (operation) {
        case '+':
            result = a + b
            break
        case '-':
            result = a - b
            break
        case '*':
            result = a * b
            break
        case '/':
            result = a / b
            break
        default:
            return
        }
        output = result
        input = ''
        result = undefined
    }

deleteLast = function() {
    input = input.toString().slice(0, -1)
}