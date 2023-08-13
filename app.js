let currentVal = ''
let previousVal = ''
let operator = ''
let hasDecimal = false
let result = ''
let val1 = document.querySelector('.val1')
let val2 = document.querySelector('.val2')

document.addEventListener('DOMContentLoaded', function() {
    let numEl = document.querySelectorAll('.number')
    // window.addEventListener('keydown', function(e){
    //     const numEl2 = document.querySelector(`button[data-key='${e.code}']`)
    //     numEl2.click()
    // })
    let operatorEl = document.querySelectorAll('.operator')
    
    
    console.log(val2)
    
    numEl.forEach(number => number.addEventListener('click', function(e){
       if(e.target.textContent === '.' && !hasDecimal){
          hasDecimal = true
       }else if(e.target.textContent === '.' && hasDecimal){
         return
       }
       handleNum(e.target.textContent)
       val2.textContent = currentVal
    }))

    operatorEl.forEach(oper => {
       oper.addEventListener('click', (e) => {
            if (!currentVal) result
            hasDecimal = false
            if (currentVal && previousVal && operator){
                // handleOperator(e.target.textContent)
                calculate()
            } else {result = (~~currentVal)}
            
            handleOperator(e.target.textContent)
            val1.textContent = previousVal 
            val1.textContent = result + operator
            // val2.textContent = " " 
            val2.textContent = result
            console.log(result)
       })
    })
    
})

function handleNum(num){
    if(currentVal.length <= 13){
        currentVal += num
    }    
}

function handleOperator(op){
    operator = op
    previousVal = currentVal + operator
    currentVal = ''
}

// function add(a, b) {
//     return a + b
// }
  
// function substract(a, b) {
//     return a - b
// }
  
// function multiply(a, b) {
//     return a * b
// }
  
// function divide(a, b) {
//     return a / b
// }

function calculate(){
    if (operator === '+'){
       result = (~~result) + (~~currentVal)
    } else if (operator === '-'){
        result = (~~result) - (~~currentVal)
    } else if (operator === '*'){
        result = (~~result) * (~~currentVal)
    }  else if (operator === '/'){
        result = (~~result) / (~~currentVal) 
    }     
}