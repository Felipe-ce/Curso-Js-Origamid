const Aluno = {
  nome: 'Felipe',
  sobrenome: 'Xavier',
  curso: 'javascript',

  media(nota1, nota2, nota3){
    return (nota1 + nota2 + nota3) / 3;
  }
}

const Cachorro = {
  nome: 'bob',
  raca: 'labrador',
  idade: 10,
  latir(pessoa){
    if (pessoa === 'homem') {
      return 'Latir'
    } else{
      return ''
    }
  }
}