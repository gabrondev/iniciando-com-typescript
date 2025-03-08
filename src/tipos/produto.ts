// nome, preco, desconto (0-1), Função precoComDesconto

function calcularPrecoComDesconto(preco: number, desconto:number): number {
    return (desconto >= 0 && desconto <= 1) ? preco * (1 - desconto) : preco
}

type Produto = {
    nome: string, 
    preco: number, 
    desconto: number, 
    precoComDesconto: number
}

let produto1: Produto = {
    nome: 'Creatina',
    preco: 78.9,
    desconto: 0.37,
    // precoComDesconto: calcularPrecoComDesconto(this.preco, this.desconto)
    get precoComDesconto(): number {
        return calcularPrecoComDesconto(this.preco, this.desconto)
    }
}

console.log(produto1.nome)
console.log(produto1.preco)
console.log(produto1.desconto)
console.log(produto1.precoComDesconto)