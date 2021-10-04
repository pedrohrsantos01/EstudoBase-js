//Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'Qualquer',
    preço: 1.99,
    tag: 'promoção'
})
console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar'
delete produto.tag

console.log(produto)

//Object.seal
const pessoa = { nome: 'Leôncio', idade: 40}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.nome = 'Creiosvaldo'
pessoa.endereco = 'Casa da mãe joana'
delete pessoa.idade

console.log(pessoa)

//Object.freeze = selado + valores constantes
