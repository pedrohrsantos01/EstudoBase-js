class Lancamento {
    constructor(nome = 'Padrão', valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor( mes , ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos (...lancamentos) {
        lancamentos.forEach(v => this.lancamentos.push(v))
    }

    sumario () {
        let valorConsolidado = 0 
        this.lancamentos.forEach(v => {
            valorConsolidado += v.valor
        })
        return valorConsolidado
    }

}

const salario = new Lancamento ('Salário', 5000)
const contaDeLuz = new Lancamento('Luz', -700)

const contas = new CicloFinanceiro(6, 2018)

contas.addLancamentos(salario, contaDeLuz)

console.log(contas.sumario())