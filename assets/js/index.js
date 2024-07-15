const equalsBtn = document.querySelector("#equalsBtn")
const deleteBtn = document.querySelector("#deleteBtn")
const clearBtn = document.querySelector("#clearBtn")

const calculator = {
    display:document.querySelector("#display > input"),

    addValuesInDisplay(currentValue){
        this.display.value += currentValue
    },

    validCaracters(currentCaracter){
        if(currentCaracter != '<<' && currentCaracter != '=' && currentCaracter != 'C'){
            this.addValuesInDisplay(currentCaracter)
        }  
    },

    // identifierOperation(){
    //     let operations = ['/','+','-','*'];
    //     let currentValueOfDisplay = this.display.value;
    //     let currentOperation;

    //     for(let count of operations){
    //        if(currentValueOfDisplay.includes(count)){
    //           currentOperation = count
    //           break
    //        }
    //     }
    //     return this.executeOperation(currentOperation)
    // },

    // executeOperation(currentOperation){
    //     let firstHalf = this.display.value.split(`${currentOperation}`)[0]
    //     let secondHalf = this.display.value.split(`${currentOperation}`)[1]

    //     firstHalf = Number(firstHalf)
    //     secondHalf = Number(secondHalf)

    //     return this.searchCurrentOperation(currentOperation,firstHalf,secondHalf)
    // },

    // searchCurrentOperation(operation,firstNumber,secondNumber){
       
    //    switch(operation){
    //        case '+':
    //         return this.display.value = firstNumber + secondNumber
    //        case '-':
    //         return this.display.value = firstNumber - secondNumber
    //        case '*':
    //         return this.display.value = firstNumber * secondNumber
    //        case '/':
    //         return this.display.value = firstNumber / secondNumber
    //    }
    // },

    executeOperation(){
      let account = this.display.value
      account = eval(account)
      this.display.value = account
    },

    deleteLastDigit(){
        let currentValue = this.display.value
        this.display.value = currentValue.slice(0,currentValue.length - 1)
        console.log(this.display.value)
    },

    clearDisplay(){
        this.display.value = ""
    },
}




document.body.addEventListener("click", (e) => {
    const element = e.target
    if(element.classList.contains("button")){
       const currentValue = element.textContent
       calculator.validCaracters(currentValue)
    }
})
equalsBtn.addEventListener("click", () => {
    calculator.executeOperation()
})
deleteBtn.addEventListener("click", () => {
    calculator.deleteLastDigit()
})
clearBtn.addEventListener('click', () => {
    calculator.clearDisplay()
})
