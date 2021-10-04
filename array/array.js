
let aprovados = new Array ("Pedro", "Santos", "Macaco")
console.log(aprovados)

let padrao = ['cheiro','ouvir','tocar']
console.log(padrao)

padrao.push('Noia')
padrao.shift(0)
console.log(padrao[0])

padrao[3] = 'João'
console.log(padrao)
console.log(padrao.length)

aprovados[9] = 'Gorila'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)
console.log(aprovados)


aprovados.sort()
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])

aprovados = ['Henrique', 'Rodrigues', 'Santos']
aprovados.splice(1, 2, 'Lauro', 'Laura')
console.log(aprovados)

