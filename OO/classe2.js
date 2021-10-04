class Avo {
    constructor (sobrenome = 'Santos') 
    {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {
    constructor(sobrenome, profissao = 'Professor') {
        super(sobrenome)
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor() {
        super('Silva')
    }
}

const avo = new Avo 
console.log(avo)

const filho = new Filho 
console.log(filho)

const pai = new Pai
console.log(pai)

