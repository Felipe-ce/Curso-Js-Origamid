const intrumentos = ['violão', 'baixo', 'guitarra']
const carros = new Array('calta', 'gol', 'golf');


// _____________________________________________
/*    
    ARRAY.FROM()
    Array.from() é um método utilizado para transformar array-like objects, em uma array.
*/
let li = document.querySelectorAll('li'); // NodeList
li = Array.from(li); // Array

const carros1 = {
  0: 'Fiat',
  1: 'Honda',
  2: 'Ford',
  length: 4,
}
const carrosArray = Array.from(carros1);


// _____________________________________________
/*    
    ARRAY.ISARRAY()
    Verifica se o valor passado é uma array e retorna um valor booleano.
*/
let li1 = document.querySelectorAll('li1'); // NodeList
console.log(Array.isArray(li1)); // false

li1 = Array.from(li1); // Array
console.log(Array.isArray(li1)); // true


// _____________________________________________
/*    
    ARRAY.OF(), ARRAY() E NEW ARRAY()
    Verifica se o valor passado é uma array e retorna um valor booleano. A palavra chave new não é necessária para utilizar o construtor Array.
*/
console.log(Array.of(10))
console.log(Array.of(1,2,3,85,8))
console.log(new Array(5))
console.log(Array(5))
console.log(Array(5,2,6))


// _____________________________________________
/*    
    PROPRIEDADES E MÉTODOS DO PROTOTYPE
    [].length retorna o tamanho da array.
*/
const frutas = ['Banana', 'Pêra', ['Uva Roxa', 'Uva Verde']];
//console.log(frutas.length) // 3

console.log(frutas[0].length); // 6
console.log(frutas[1].length); // 4
console.log(frutas[2].length); // 2
console.log(frutas[2][1].length); // 2


// _____________________________________________
/*    
    MÉTODOS MODIFICADORES [].SORT()
    Os próximos métodos que vamos falar sobre, são métodos modificadores (mutator methods). Além de retornarem um valor, eles modificam a array original. [].sort() organiza a pelo unicode.
*/
const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
console.log(instrumentos.sort())

const idades = [32,21,33,43,1,12,8];
console.log(idades.sort())


// _____________________________________________
/*    
    MÉTODOS MODIFICADORES [].SORT()
    [].unshift() adiciona elementos ao início da array e retorna o length da mesma. [].push() adiciona elementos ao final da array e retorna o length da mesma.
*/
const casa = ['quarto', 'cozinha', 'sala']
console.log(casa.unshift('varanda'))
console.log(casa.push('quintal', 'banheiro'))


// _____________________________________________
/*    
    [].SHIFT() E [].POP()
    [].shift() remove o primeiro elemento da array e retorna o mesmo. [].pop() remove o último elemento da array e retorna o mesmo.
*/
const banheiro = [
  'chuveiro',
  'box',
  'pia',
  'sanitario'
]
console.log(banheiro.shift())
console.log(banheiro.pop())
console.log(banheiro)


// _____________________________________________
/*    
    [].REVERSE()
    [].reverse() inverte os itens da array e retorna a nova array.
*/
const noteBook = new Array('tela', 'telcado', 'processador', 'ssd');
console.log(noteBook.reverse())


// _____________________________________________
/*    
    [].SPLICE()
    [].splice(index, remover, item1, item2, ...) adiciona valores na array a partir do index. Remove a quantidade de itens que for passada no segundo parâmetro (retorna esses itens).
*/
const cadeira = new Array('rodizio', 'estrela', 'pistão', 'flange', 'parafuso'); 
console.log(cadeira.splice(2, 1, 'assento', 'encosto'))
console.log(cadeira)


// _____________________________________________
/*    
    [].COPYWITHIN()
    [].copyWithin(alvo, inicio, final) a partir do alvo, ele irá copiar a array começando do inicio até o final e vai preencher a mesma com essa cópia. Caso omita os valores de início e final, ele irá utilizar como inicio o 0 e final o valor total da array.
*/
const itens1 = ['Item1', 'Item2', 'Item3', 'Item4']
console.log(itens1.copyWithin(2, 0, 2))
// ['Item1', 'Item2', 'Item1', 'Item2']

const itens2 = ['Item1', 'Item2', 'Item3', 'Item4'].copyWithin(-1);
console.log(itens2.copyWithin(2, 0, 2))
// ['Item1', 'Item2', 'Item3', 'Item1']


// _____________________________________________
/*    
    [].FILL()
    [].fill(valor, inicio, final) preenche a array com o valor, do início até o fim.
*/
const itens3 = ['Item1', 'Item2', 'Item3', 'Item4'];
console.log(itens3.fill('Banana'))
// ['Banana', 'Banana', 'Banana', 'Banana']

const itens4 = ['Item1', 'Item2', 'Item3', 'Item4'];
console.log(itens4.fill('Banana', 2)) // COMEÇA a partir do index passado obs index começa no zero
// ['Item1', 'Item2', 'Banana', 'Banana']

const itens5 = ['Item1', 'Item2', 'Item3', 'Item4'];
console.log(itens5.fill('Banana', 1, 3))//COMEÇA no item 1 e PARE no item3
// ['Item1', 'Banana', 'Banana', 'Item4']


// _____________________________________________
/*    
    MÉTODOS DE ACESSO [].CONCAT()
    Os métodos abaixo não modificam a array original, apenas retornam uma array modificada. [].concat() irá concatenar a array com o valor passado.
*/
const transporte1 = ['barco', 'avião']
const transporte2 = ['carro', 'moto', ['mar', 'terra', 'ceu']]
const transporte = transporte1.concat(transporte2)
console.log(transporte)
console.log(transporte[transporte.length-1])


// _____________________________________________
/*    
    [].INCLUDES(), [].INDEXOF() E [].LASTINDEXOF()
    [].includes(valor) verifica se a array possui o valor e retorna true ou false. [].indexOf(valor) verifica se a array possui o valor e retorna o index do primeiro valor na array. Já o [].lastIndexOf(valor) retorna o index do último.
*/
const linguagens = ['html', 'css', 'js', 'php', 'python', 'js'];
console.log(linguagens.includes('css'))
console.log(linguagens.includes('ruby'))//false pq o C esta maiusculo
console.log(linguagens.indexOf('js'))//index[2] pq começa do inicio
console.log(linguagens.lastIndexOf('js'))//index[5] pq começa do final
console.log(linguagens.indexOf('html'))


// _____________________________________________
/*    
    [].JOIN()
    [].join(separador) junta todos os valores da array e retorna uma string com eles. Se você passar um valor como parâmetro, este será utilizado durante a junção de cada item da array. 
*/
const linguagens1 = ['html', 'css', 'js', 'php', 'python'];
console.log(linguagens1.join())
console.log(linguagens1.join(' '))
console.log(linguagens1.join(' - '))

let htmlString = '<h2>Título Principal</h2>'
htmlString = htmlString.split('h2')//split() remove da variavel
console.log(htmlString)
htmlString = htmlString.join('h1')
console.log(htmlString)


// _____________________________________________
/*    
    [].SLICE()
    [].slice(inicio, final) retorna os itens da array começando pelo início e indo até o valor de final.. 
*/
const linguagens2 = ['html', 'css', 'js', 'php', 'python', 'ruby', 'portugol'];
console.log(linguagens2.slice(3)) //começa a partir do 3
console.log(linguagens2.slice(2, 5)) //COMEÇA no 2 e TERMINA no 5

const cloneLinguagens = linguagens2.slice();


// _____________________________________________
/*    
  Exercicios
*/

const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável
// Remova o último valor de comidas e coloque em uma variável
// Adicione 'Arroz' ao final da array
// Adicione 'Peixe' e 'Batata' ao início da array
const item1 = comidas.shift()
console.log(item1)
const item2 = comidas.pop()
console.log(item2)
comidas.push('arroz')
console.log(comidas)
comidas.unshift('peixe', 'batata')
console.log(comidas)



const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// Arrume os estudantes em ordem alfabética
// Inverta a ordem dos estudantes
// Verifique se Joana faz parte dos estudantes
// Verifique se Juliana faz parte dos estudantes
console.log(estudantes.sort())
console.log(estudantes.reverse())
console.log(estudantes.includes('Joana'))
console.log(estudantes.includes('Juliana'))



let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`
// Substitua section por ul e div com li,
// utilizando split e join
html = html.split('section').join('ul').split('div').join('li')
console.log(html)

const carros3 = ['Ford', 'Fiat', 'VW', 'Honda'];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável
const novoCarros3 = carros3.slice()

carros3.pop()
console.log(carros3)
console.log(novoCarros3)

