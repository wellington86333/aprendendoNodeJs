var readlineSync = require('readline-sync')
var valor1 = 10
var valor2 = 20
var total = valor1 + valor2  

var total = valor1 + valor2;
console.log('Programa que soma dois numeros');
valor1 = parseFloat(readlineSync.question('Valor A: '))
console.log(valor1 + "+"  + valor2 + "=" + total)
valor2 = parseFloat(readlineSync.question('Valor B'))



console.log(total)