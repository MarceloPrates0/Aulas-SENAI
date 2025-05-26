const readlineSync = require('readline-sync')

let numero = 0
do {
    numero = readlineSync.questionInt("Insira um número: ")
} while (numero != 0) 