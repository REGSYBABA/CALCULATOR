let val1 = document.querySelector('.val1')
let val2 = document.querySelector('.val2')
let equalEl = document.querySelector('.equal')
let clearBtn = document.querySelector('.clear')
let deleteBtn = document.querySelector('.delete')
let numEl = document.querySelectorAll('.number')
let operatorEl = document.querySelectorAll('.operator')
const themeBtn = document.querySelector('.theme-btn')
let currentVal = ''
let previousVal = ''
let operator = ''
let hasDecimal = false
let result = ''

document.addEventListener('DOMContentLoaded', function() {
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
                calculate()
            } 
            else {result = Number(currentVal)}
            handleOperator(e.target.textContent)
            exception()
           
       })
    })

    equalEl.addEventListener('click', () => {
        handleEqual()    
    })
    
    clearBtn.addEventListener('click', () => {
        handleClear()
    })
    
    deleteBtn.addEventListener('click', () => {
        if (val2.textContent === '0' && val1.textContent === '0') return
            val2.textContent = val2.textContent.slice(0, -1)
            currentVal = val2.textContent 
    })

    window.addEventListener('keydown', function(e){
        const numEl2 = document.querySelector(`button[data-key='${e.code}']`)
        numEl2.click()
        console.log(e.code)
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
    val1.textContent = result + operator
    val2.textContent = " "
    currentVal = ''
}

function calculate(){
    if (operator === '+'){
       result = Number(result) + Number(currentVal)
    } else if (operator === '-'){
        result = Number(result) - Number(currentVal)
    } else if (operator === '*'){
        result = Number(result) * Number(currentVal)
    } else if (operator === '/'){
        result = Number(result) / Number(currentVal) 
        if (Number(currentVal) === 0 && operator === '/'){
            result = 'Leemao' 
        }
    }
    result = Math.round(result * 1000) / 1000    
}

function handleEqual(){
    if(!currentVal || !previousVal) return
    hasDecimal = false
    calculate()
    val1.textContent += currentVal
    val2.textContent = result
    currentVal = result
    previousVal = ''
}

function exception(){
    if (!currentVal && previousVal && operator === '%'){
        result = Number(result) / 100
        val2.textContent = result
        currentVal = result
        previousVal = ''
    }
}

function handleClear(){
    currentVal = ''
    previousVal = ''
    operator = ''
    hasDecimal = false
    result = ''
    val2.textContent = '0'
    val1.textContent = '0'
}

// function roundNum(num){
//     result = Math.round(num * 1000) / 1000
// }

themeBtn.addEventListener('click', () => {
    let element = document.body
    element.classList.toggle('light-mode')
})