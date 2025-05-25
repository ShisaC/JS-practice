
const input = document.querySelector('input')

const upperCaseOutput = document.querySelector('#uppercase span')
const lowerCaseOutput = document.querySelector('#lowercase span')
const camelCaseOutput = document.querySelector('#camelcase span')
const pascalCaseOutput = document.querySelector('#pascalcase span')
const snakeCaseOutput = document.querySelector('#snakecase span')
const kebabCaseOutput = document.querySelector('#kebabcase span')
const trim = document.querySelector('#trim span')

function capitalizeString(str) {
    return str[0].toUpperCase() + str.slice(1,str.length)
}
function camelCase(str) {
    const lowerCaseString = str.toLowerCase()
    const wordsArray = lowerCaseString.split(' ')
    const finalArray = wordsArray.map((word, i) => {
        if(i === 0) return word
        return capitalizeString(word)
    })
    return finalArray.join('')
}

function pascalCase(str) {
    const lowerCaseString = str.toLowerCase()
    const wordsArray = lowerCaseString.split(' ')
    const finalArray = wordsArray.map((word, i) => {
        return capitalizeString(word)
    })
    return finalArray.join('')
}

function snakeCase(str) {
    const wordsArray = str.split(' ')
    return wordsArray.join('_')
}

function updateScreen(){
    lowerCaseOutput.innerText = input.value.toLowerCase()
    upperCaseOutput.innerText = input.value.toUpperCase()
    camelCaseOutput.innerText = camelCase(input.value)
    pascalCaseOutput.innerText = pascalCase(input.value)
    snakeCaseOutput.innerText = snakeCase(input.value)
}

updateScreen()

input.addEventListener('input', updateScreen)
