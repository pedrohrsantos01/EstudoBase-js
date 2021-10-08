const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90}',
    '{ "nome": "Kit de Lapis", "preco": 41.42}',
    '{ "nome": "Caneta", "preco": 7.50}'
]

//Retornar um array apenas com os preços

const transformar = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(transformar).map(apenasPreco) 
    
console.log(resultado)