const times = new Set();
times.add('Vasco')
times.add('Botafogo').add('Fluminense').add('Flamengo').add('São Paulo')
times.add('Vasco')

const arr = ['Vasco', 'Botafogo', 'Flamengo', 'São Paulo', 'Internacional']

const newarr = new Set(arr)

console.log(times)
console.log(times.size)
console.log(times.has('Vasco'))
console.log(times.delete('Vasco'))
console.log(times.has('Vasco'))

console.log(newarr)