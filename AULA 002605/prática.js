const readlineSync = require('readline-sync')

let soma = 0

for (i = 1; i <= 2; i++) {
    let numero = parseFloat(readlineSync.question("Insira duas notas: "))
    soma = soma + numero
}
media = soma/2
console.log(`A sua média é de: ${media}`)
