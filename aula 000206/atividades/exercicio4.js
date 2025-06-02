const readlineSync = require('readline-sync')

function positivoNegativo(var1) {
    if (var1 < 0) {
        console.log("É negativo.")
    } else {
        console.log("É positivo.")
    }
}

let numero = readlineSync.questionFloat('Insira um numero: ')
positivoNegativo(numero)
