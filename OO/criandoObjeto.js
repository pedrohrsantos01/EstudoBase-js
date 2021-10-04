// usando a notação literal
const obj1 = {}
console.log(obj1)

// Objeto em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

//Função Construtora
function produto(nome, preco, desc) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new produto('Caneta Azul', 20, 0.10)
const p2 = new produto('Mochila', 80, 0.15)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())


//Função Factory
function criarFuncionario (nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario () {
            return(salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('Mario', 7000, 10)
const f2 = criarFuncionario('Tadeu', 11500, 2)
console.log(f1.getSalario())
console.log(f2.getSalario())


//Object.create
const filho = Object.create(null)
filho.nome = 'Leôncio'
console.log(filho)


//uma função famosa que retorna um Objeto 
const fromJSON = JSON.parse('{"info": "Boa sorte JSON" }')
console.log(fromJSON.info)