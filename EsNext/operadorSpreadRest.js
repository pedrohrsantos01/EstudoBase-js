// operador  ... rest(juntar)/spread(espalhar)
// usar o rest com parâmetro de função 

//usar spread com objeto 
const funcionario = { nome: 'Pedro Santos', salario: 7501.00}
const clone = { ativo: true, ...funcionario}

console.log(clone)

//usar spread com array 
const grupoA = ['Pedro', 'Mario', 'Gilberto']
const grupoFinal =['Antonio', ...grupoA, 'Leonardo']

console.log(grupoFinal)

