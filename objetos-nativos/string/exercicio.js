// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso
let cursos = Array.from(document.querySelectorAll('.curso'))

const objetoCursos = cursos.map((curso) =>{
  const titulo = curso.querySelector('h1').innerText;
  const descricao = curso.querySelector('p').innerText;
  const aulas = curso.querySelector('.aulas').innerText;
  const horas = curso.querySelector('.horas').innerText;
  return {
    titulo,
    descricao,
    aulas,
    horas,
    /*
    qdo a propriedade e valor tem o mesmo nome no obejeto, pode usar  opadrao a cima
    titulo: titulo,
    descricao: descricao,
    aulas: aulas,
    horas: horas,
    */
  }
})




// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];
const maiorQue100 = numeros.filter((item) => item >100)
console.log(maiorQue100)


// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']
const buscarBaixo = instrumentos.some((item) =>{
  return item.toLowerCase() === 'baixo'
})
console.log(buscarBaixo)


// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 10,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  }
]

const valorTotal = compras.reduce((acumulador, preco) =>{
  return acumulador + Number(preco.preco.replace('R$ ', '').replace(',', '.'));
}, 0)

