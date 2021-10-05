const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

pilotos.pop() //remove ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstappen') // adiciona o elemento no final do array
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Hamilton') //adiciona o elemento na primeira posição do array
console.log(pilotos)


//splice pode adicionar e remover elementos

//adicionar
pilotos.splice(2, 0 , 'Bottas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3,1) // massa sai novamente!
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) //novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)