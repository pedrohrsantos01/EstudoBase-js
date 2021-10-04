const soma = function (x, y){
    return x + y
}

const imprimirResultado = function(a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(5,6)
imprimirResultado(5, 6, soma)
imprimirResultado(5, 6, function(x, y){
return x - y
})

imprimirResultado(4, 7 ,(x,y) => x * y)

const pessoa = {
    falar: function () {
        console.log("Paulada7")
    }
}

pessoa.falar()

