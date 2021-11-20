
function real(partes, ...valores) {
    const resultado = [];
    valores.forEach((valor, indice) => {
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`
        resultado.push(partes[indice], valor)
    })
    return resultado.join('')

}

const preco = 50.9
const precoParcela = 23
console.log(real `O preco a vista fica por ${preco} e podendo ser parcelado por 2x de ${precoParcela}.`)