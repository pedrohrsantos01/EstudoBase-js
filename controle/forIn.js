const notas = [5.4, 8.4, 6.3, 4.5, 9.2]

for(i in notas){
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Pedro',
    sobrenome: 'Santos',
    idade: 25,
    peso: 84
}

for(atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}