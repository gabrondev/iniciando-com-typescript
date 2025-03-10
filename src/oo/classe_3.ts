// Produto (id, nome (2 - 250 carac), preco (>0), desc (0 - 0.8), precoFinal)
// Dados consistentes: tem que ter id, preco > 0, desc entre 0 e 0.8

const Erro = {
    ID_INVALIDO: 'ID inválido. Certifique-se de que o ID seja maior ou igual a 1.',
    NOME_PROD_INVALIDO: 'Nome do produto inválido. Certifique-se de que o tamanho do nome está entre 2 e 250 caracteres.',
    PRECO_PROD_INVALIDO: 'Preço do produto inválido. Certifique-se de que o preço é maior do que zero.',
    DESCONTO_PROD_INVALIDO: 'Desconto do produto inválido. Certifique-se de que o desconto está entre 0 e 0.8.'
}

class Produto {
    readonly id: number
    readonly nome: string
    private _preco: number = 0
    private _desconto: number = 0

    constructor(id: number, nome:string, preco: number, desconto: number) {
        this.id = id
        this.nome = nome
        this._preco = preco
        this._desconto = desconto

        if(id < 1) throw new Error(Erro.ID_INVALIDO)
        if(nome.length < 2 || nome.length > 250) throw new Error(Erro.NOME_PROD_INVALIDO)
        if(preco < 0) throw new Error(Erro.PRECO_PROD_INVALIDO)
        if(desconto < 0 || desconto > 0.8) throw new Error(Erro.DESCONTO_PROD_INVALIDO)
    }

    get preco() {
        return this._preco
    }

    set preco(novoPreco: number) {
        if(novoPreco > 0){
            this._preco = novoPreco
        } else {
            throw new Error(Erro.PRECO_PROD_INVALIDO)
        }
    }

    get desconto() {
        return this._desconto
    }

    set desconto(novoDesconto) {
        if(novoDesconto >= 0 && novoDesconto <= 0.8) {
            this._desconto = novoDesconto
        } else {
            throw new Error(Erro.DESCONTO_PROD_INVALIDO)
        }
    }

    calcularPrecoFinal() {
        return this.preco * (1 - this._desconto)
    }
}

const p1 = new Produto(1, 'Creatina', 79, 0.37)

console.log(p1.id)
console.log(p1.nome)
console.log(p1.preco)
console.log(p1.desconto)
console.log(p1.calcularPrecoFinal())

p1.desconto = 0.4
console.log(p1.desconto)
console.log(p1.calcularPrecoFinal())

export{}