
var readlineSync = require('readline-sync')

var valor1 = 0
var valor2 = 0
var valor3 = 0
var valor4 = 0
var valor5 = 0
var total = 0
var media = 0

valor1 = parseFloat(readlineSync.question(' 1 - valor: '))
valor2 = parseFloat(readlineSync.question(' 2 - valor: '))
valor3 = parseFloat(readlineSync.question(' 3 - valor: '))
valor4 = parseFloat(readlineSync.question('4 - valor:' ))
valor5 = parseFloat(readlineSync.question('5 - valor:' ))
total = valor1 + valor2 + valor3 + valor4 + valor5
media = total / 5

console.log("A média do aluno é: " + media)
