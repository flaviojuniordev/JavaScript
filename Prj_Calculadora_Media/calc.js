// Calculadora de média em JavaScript

// Exibe um alerta
alert("Calculadora de média!");

// Solicita um número ao usuário
var numero1 = prompt("Digite o primeiro número:");
var numero2 = prompt("Digite o segundo número:");
var numero3 = prompt("Digite o terceiro número:");

// Converte os valores de string para número e calcula a soma e a média
var soma = parseInt(numero1) + parseInt(numero2) + parseInt(numero3);
var media = soma / 3;

// Exibe o resultado
alert("A soma dos números é: " + soma);
alert("A media dos três números é: " + media);