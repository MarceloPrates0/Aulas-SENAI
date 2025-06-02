const readlineSync = require('readline-sync')

let dia = readlineSync.questionFloat('Insira um número.')

switch (dia) {
    case 1:
        console.log("Domingo. Final de semana.")
        break;
    case 2:
        console.log("Segunda. Dia útil.")
        break;
        case 3:
        console.log("Terça. Dia útil.")
        break;
    case 4:
        console.log("Quarta. Dia útil.")
        break;
    case 5:
        console.log("Quinta. Dia útil.")
        break;
    case 6:
        console.log("Sexta. Dia útil.")
        break;
    case 7:
        console.log("Sábado. Final de semana.")       
        break;
        
        default:
        console.log("Inválido.")       
        break;
}