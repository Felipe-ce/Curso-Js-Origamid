// _____________________________________________
/*    
  [].FOREACH()
  [].forEach(callback(itemAtual, index, array)) a função de callback é executada para cada item da array. Ela possui três argumentos, itemAtual (valor do item da array), index (index do valor na array) e array (array original).
  O método sempre retorna undefined
*/
const carros = [
  'ford',
  'kia',
  'bmw',
  'ford',
]
carros.forEach((item, index, array) =>{
  console.log(item.toUpperCase())
})
carros.forEach((item, index, array) =>{
  array = 'teste'// Neste caso estou modificando o array
  console.log(index, array)
})


// _____________________________________________
/*    
  ARROW FUNCTION
*/
const li = document.querySelectorAll('li')
li.forEach(li => li.classList.add('ativo'))//se passa só um argumento não precisa dos (), se tiver somente 1 linha pra retornar a função não precisa das {}


// _____________________________________________
/*    
  [].MAP()
  [].map(callback(itemAtual, index, array)) funciona da mesma forma que o forEach(), porém ao invés de retornar undefined, retorna uma nova array com valores atualizados de acordo com o return de cada iteração.
*/
const carros1 = [
  'ford',
  'kia',
  'bmw',
  'ford',
]
const newCarros = carros1.map((item) =>{
  return 'Carro' + item;
})
console.log(newCarros)

const numeros = [
  2,
  4,
  6,
  7,
  9,
]
const numeroX2 = numeros.map((item) => item*2)
console.log(numeroX2)


// _____________________________________________
/*    
  [].MAP() VS [].FOREACH()
  Se o objetivo for modificar os valores da array atual, sempre utilize o map, pois assim uma nova array com os valores modificados é retornada e você pode imediatamente iterar novamente sobre estes valores.
*/
const numeros2 = [2, 4, 6, 8, 10, 12, 14];
const numerosX3 = numeros2.map(n => n * 3);

numerosX3; // [6, 12, 18, 24, 30, 36, 42];


// _____________________________________________
/*    
  [].MAP() COM OBJETOS
  Map pode ser muito útil para interagirmos com uma array de objetos, onde desejamos isolar um valor único de cada objeto.
*/
const aulas = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'css 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]
const tempoAulas = aulas.map((aula) => aula.min);
const puxarNomes = aula => aula.nome;
const NomesAulas = aulas.map((aula) => aula.nome);


// _____________________________________________
/*    
  [].REDUCE()
  [].reduce(callback(acumulador, valorAtual, index, array), valorInicial) executa a função de callback para cada item da Array. Um valor especial existe nessa função de callback, ele é chamado de acumulador, mas é na verdade apenas o retorno da iteração anterior.
*/
const aulas1 = [10, 25,30]
const total1 = aulas1.reduce((acumulador, atual) =>{
  //console.log(acumulador)
  //console.log(atual)
  return acumulador + atual;
})
console.log(total1)

const total2 = aulas1.reduce((acc, cur) => acc + cur, 100)
console.log(total2)
/*
REDUCE PASSO A PASSO 1
O primeiro parâmetro do callback é o valor do segundo argumento passado no reduce(callback, inicial) durante a primeira iteração. Nas iterações seguintes este valor passa a ser o retornado pela anterior.
*/
const aulas = [10, 25, 30];

// 1
aulas.reduce((0, 10) => {
  return 0 + 10;
}, 0); // retorna 10

// 2
aulas.reduce((10, 25) => {
  return 10 + 25;
}, 0); // retorna 35

// 3
aulas.reduce((35, 30) => {
  return 35 + 30;
}, 0); // retorna 65
/*
REDUCE PASSO A PASSO 2
Se não definirmos o valor inicial do acumulador, ele irá pular a primeira iteração e começara a partir da segunda. Neste caso o valor do acumulador será o valor do item da primeira iteração.
*/
const aulas = [10, 25, 30];

// 1
aulas.reduce((10, 25) => {
  return 10 + 25;
}) // retorna 35

// 2
aulas.reduce((35, 30) => {
  return 35 + 30;
}) // retorna 65
