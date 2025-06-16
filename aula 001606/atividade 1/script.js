function mediaNotas() {
    const notasInserir = document.getElementById('notasInserir')
    let nota = parseFloat(notasInserir.value)
    const notasInserir2 = document.getElementById('notasInserir2')
    let nota2 = parseFloat(notasInserir2.value)
    const notasInserir3 = document.getElementById('notasInserir3')
    let nota3 = parseFloat(notasInserir3.value)

    let media = (nota +nota2+nota3)/3
    let media2 = media.toFixed(2)

    const resultadoNotas = document.getElementById('mediaNotas')
    resultadoNotas.innerHTML = ''
    if (media2 <= 4) {
        resultadoNotas.innerHTML = `<h2>Sua média: ${media2}<br>Reprovado</h2>`
    } else if (media2 < 7){
        resultadoNotas.innerHTML = `<h2>Sua média: ${media2}<br>Recuperação</h2>`
    } else {
        resultadoNotas.innerHTML = `<h2>Sua média: ${media2}<br>Aprovado</h2>`
    }
}

const enviarNotas = document.getElementById('enviarNotas')
enviarNotas.addEventListener('click', mediaNotas)
