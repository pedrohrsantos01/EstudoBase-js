//ES8: Object.values/Object.entries
const obj = {a: 1, b: 2, c: 3}
console.log(Object.values(obj))
console.log(Object.entries(obj))

//Melhorias na Notação Literal
const nome = 'Pedro'
const pessoa = {
    nome,
    ola() {
        return 'Fala Gente!'
    }
}

console.log(pessoa.nome, pessoa.ola())

//Classe
class Animal {}
class Cachorro extends Animal {
    falar() {
        return 'Fala Truta!'
    }
}

console.log(new Cachorro().falar())

