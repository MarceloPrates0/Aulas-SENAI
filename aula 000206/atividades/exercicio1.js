const readlineSync = require('readline-sync')

function mensagem(var1,var2) {
    if (var1 < var2) {
        console.log(`\nC é MAIOR que a soma de A + B`)
    } else {
        console.log(`C é MENOR que a soma de A + B`)
    }
}

const A = readlineSync.questionFloat('Insira o valor A: ') 
const B = readlineSync.questionFloat('Insira o valor B: ')
const C = readlineSync.questionFloat('Insira o valor C: ')
const soma = A+B

mensagem(soma, C)