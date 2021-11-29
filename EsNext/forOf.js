for (let letras of 'Mundo') {
    console.log(letras)
}

const assuntosEcma = ['Map', 'Set', 'Promise']

for (let assuntos of assuntosEcma) {
    console.log(assuntos)
}

for(let i in assuntosEcma) {
    console.log(i)
}

const mapa = new Map([
    ['Map', {abordado: true}],
    ['Set', {abordado: true}],
    ['Promise', {abordado: false}]
])

for(let chave of mapa.keys()){
    console.log(chave)
}

for(let valores of mapa.values()) {
    console.log(valores)
}

for(let [ch,vl] of mapa.entries()){
    console.log(ch,vl)
}