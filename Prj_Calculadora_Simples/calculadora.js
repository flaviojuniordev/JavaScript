var n1 = document.querySelector('#n1')
var n2 = document.querySelector('#n2')
var resultado = document.querySelector('span')

const btnSum = document.querySelector('.btnSum')
const btnSub = document.querySelector('.btnSub')
const btnMult = document.querySelector('.btnMult')
const btnDiv = document.querySelector('.btnDiv')

btnSum.addEventListener("click", somar);
function somar() {
    resultado.innerHTML = parseInt(n1.value) + parseInt(n2.value)
    alert("O resultado da soma é: " + resultado.innerHTML)
}

btnSub.addEventListener("click", subtrair);
function subtrair() {
    resultado.innerHTML = parseInt(n1.value) - parseInt(n2.value)
    alert("O resultado subtração é: " + resultado.innerHTML)
}

btnMult.addEventListener("click", multiplicar);
function multiplicar() {
    resultado.innerHTML = parseInt(n1.value) * parseInt(n2.value)
    alert("O resultado da multiplicação é: " + resultado.innerHTML)
}

btnDiv.addEventListener("click", dividir);
function dividir() {
    resultado.innerHTML = parseInt(n1.value) / parseInt(n2.value)
    alert("O resultado da divisão é: " + resultado.innerHTML)
}
