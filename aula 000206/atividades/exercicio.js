const readlineSync = require('readline-sync')

function igualar(var1, var2) {
    if (var1 === var2) {
        return var1+var2
    } else {
        return var1*var2
    }
}


function mensagem(var1, var2) {
    if (var1 == var2) {
        console.log("Valores iguais. Somando: ")
    } else {
        console.log("Valores diferentes. Multiplicando: ")
    }
}

let A = readlineSync.questionFloat("Insira um valor: ")
let B = readlineSync.questionFloat("Insira um valor: ")
let C = igualar(A, B)

mensagem(A, B)
console.log(C)