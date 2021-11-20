const tecnologias = new Map();
tecnologias.set('React', { Framework: false })
tecnologias.set('Angular', {Framework: true})

console.log(tecnologias.get('React'))
console.log(tecnologias.get('Angular'))

const chavesVariadas = new Map ([
    [function () { }, 'Função'],
    [{ }, 'Objeto'],
    [123, 'numeros']
])

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl);
}) 

console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))


chavesVariadas.set(123, 'a');
chavesVariadas.set(456, 'a')
console.log(chavesVariadas)