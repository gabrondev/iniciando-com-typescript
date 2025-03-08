type Usuario = { nome: string, email: string }

const usuarios: Usuario[] = [
    {nome: 'Joao', email: 'joao@zmail.com'},
    {nome: 'Pedro', email: 'pedro@zmail.com'},
    {nome: 'Maria', email: 'maria@zmail.com'},
    {nome: 'Gustavo', email: 'gustavo@zmail.com'},
    {nome: 'Amanda', email: 'amanda@zmail.com'},
    {nome: 'Rafaela', email: 'rafaela@zmail.com'},
]

function buscarPorEmail(email: string): Usuario | null {
    return usuarios.find(u => u.email === email) ?? null
}

console.log(buscarPorEmail('maria@zmail.com'))
console.log(buscarPorEmail('mara@zmail.com'))