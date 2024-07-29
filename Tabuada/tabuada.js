
var readlineSync = require('readline-sync')

console.log("Digite o número que você deseja multiplicar")

var numero = parseInt(readlineSync.question('Digite um númmero de 0 a 10: '))

console.log(numero + " x 0 " +  " = " + (numero * 0))
console.log(numero + " x 1 " + " = " + (numero * 1))
console.log(numero + " x 2 " + " = " + (numero * 2))
console.log(numero + " x 3" + " = " + (numero * 3))
console.log(numero + " x 4" + " = " + (numero * 4))
console.log(numero + " x 5" + " = " + (numero * 5))
console.log(numero + " x 6" + " = " + (numero * 6))
console.log(numero + " x 7" + " = " + (numero * 7))
console.log(numero + " x 8" + " = " + (numero * 8))
console.log(numero + " x 9" + " = " + (numero * 9))
console.log(numero + " x 10" + " = " + (numero * 10))