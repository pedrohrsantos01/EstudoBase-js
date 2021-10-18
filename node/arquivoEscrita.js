const fs = require('fs')

const produto = {
    nome: 'Celular',
    preco: 1249.50,
    desconto: 0.15
}

const p = JSON.stringify(produto)
console.log(p)

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo salvo!')
    
})