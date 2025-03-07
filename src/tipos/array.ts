let hobbies: string[] = ['Cozinhar', 'Praticar esportes']
console.log(hobbies[0])
console.log(typeof hobbies)

// hobbies = [100]

// É possível definir um array heterogêneo fortemente tiapdo:
let endereco: [string, number] = ['Rua A', 99] 
endereco = ['Rua B', 12345]
console.log(endereco)

// Estas operações não serão aceitas:
// endereco = [60, 'Avenida Norte']
// endereco = [123]
// endereco = ['Avenida Sul']

console.log(endereco[0])
console.log(endereco[1])