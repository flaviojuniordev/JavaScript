var n1 = document.querySelector('#n1')
var n2 = document.querySelector('#n2')
var resultado = document.querySelector('span')

function somar() {
    resultado.innerHTML = parseInt(n1.value) + parseInt(n2.value)
    alert("O resultado da soma é: " + resultado.innerHTML)
}

function subtrair() {
    resultado.innerHTML = parseInt(n1.value) - parseInt(n2.value)
    alert("O resultado subtração é: " + resultado.innerHTML)
}

function multiplicar() {
    resultado.innerHTML = parseInt(n1.value) * parseInt(n2.value)
    alert("O resultado da multiplicação é: " + resultado.innerHTML)
}

function dividir() {
    resultado.innerHTML = parseInt(n1.value) / parseInt(n2.value)
    alert("O resultado da divisão é: " + resultado.innerHTML)
}