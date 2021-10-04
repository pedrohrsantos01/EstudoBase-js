const produto = new Object 
produto.nome = 'Mesa'
produto['Marca do produto'] = 'Qualquer'
produto.preco = 120

console.log(produto)
delete produto.preco
delete produto['Marca do produto']
console.log(produto)

const carro = {
    modelo: 'Audi A4',
    preco: 12000000,
    proprietario: {
        nome: 'Paulinho',
        idade: 50,
        endereco: {
            logradouro: 'Av.Pinball',
            cep: 68908160,
            numero: 620
        }
    }, 
    condutores: [{
        nome: 'João',
        idade: 29
    }, {
        nome: 'Mestiço',
        idade: 19
    }],

    calcularValorDoSeguro: function (){
        //....
    }

}

carro.proprietario.endereco.numero = 900
console.log(carro)
delete carro.condutores
delete carro.calcularValorDoSeguro
console.log(carro)