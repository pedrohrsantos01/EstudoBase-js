// novo Recurso inserido no ecmascript2015

const pessoa = {
    nome: 'Ana',
    idade: 45,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 207
    }
}

const { nome,idade } = pessoa
console.log(nome, idade)

const {nome: i, idade: n} = pessoa
console.log(i, n)

const{ timao, pumba = true} = pessoa
console.log(timao, pumba)

const { endereco: { logradouro, numero, cep }} = pessoa
console.log(logradouro, numero, cep)


