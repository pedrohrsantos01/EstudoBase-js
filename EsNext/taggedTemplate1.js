//tagged template - processa template string em funções
function tag(partes, ...valores) {
    console.log(partes);
    console.log(valores);
    return 'Outra String';
}

const aluno = 'Pedro'
const situacao = 'Aprovado'
console.log(tag `${aluno} está ${situacao}.`)
