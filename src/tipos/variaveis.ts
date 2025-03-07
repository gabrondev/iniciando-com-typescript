const nome: string = 'João' // Fortemente tipada, tem que definir o tipo
console.log(nome)

let estaChovendo: boolean
estaChovendo = true
console.log(estaChovendo) // Tem que atribuir um valor a variável antes de usá-la

let idade = 27 // Inferência de tipo
console.log(idade)

// Tipo any deve ser evitado, permite flexibilidade na tipagem (tipagem fraca)
let variavel: any = 4
variavel = 'Texto'
variavel = false
variavel = { nome: 'João' }
console.log(variavel)

// Outra forma de tipagem any
let misterio
misterio = 4
misterio = 'Texto'
console.log(misterio)