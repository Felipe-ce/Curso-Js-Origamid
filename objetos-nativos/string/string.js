/*    
     STR.LENGTH     
     Propriedade com o total de caracteres da string.
*/
const nome = 'felipe'
console.log(nome.length);

const frase = 'A melhor comida do mudno'
console.log(frase.length);
console.log(nome[0])

//macete para retornar o ultimo elemento
console.log(frase[--frase.length])



// _____________________________________________
/*    
     STR.CHARAT(N)    
     Retorna o caracter de acordo com o index de (n).
*/
const linguagem = 'Javascript'
console.log(linguagem.charAt(0))
console.log(linguagem.charAt(5))
console.log(linguagem.charAt(--linguagem.length))


// _____________________________________________
/*    
     STR.CONCAT(STR2, STR3, ...)  
     Concatena as strings e retorna o resultado.
*/
const cidade = 'fortaleza '
const estado = 'ceara'
cidade.concat(estado)

const cidadeEstado = cidade.concat(estado)
//pode ter mais de um elemento conforme abaixo
const cidadeEstadoMais = cidade.concat(estado, ' Brasil', ' America do sul')

// _____________________________________________
/*    
     STR.INCLUDES(SEARCH, POSITION)
     Procura pela string exata dentro de outra string. A procura é case sensitive.
*/
const fruta = 'banana'
const listaFrutas = 'melancia, banana, laranja'

console.log(listaFrutas.includes('banana'))
console.log(fruta.includes('Banana'))

// _____________________________________________
/*    
     STR.ENDSWITH(SEARCH) E STR.STARTSWITH(SEARCH)
     Procura pela string exata dentro de outra string. A procura é case sensitive.
*/
const banana = 'banana'

// console.log(fruta.endsWith('nana')); // true
// console.log(fruta.startsWith('Ba')); // true
// console.log(fruta.startsWith('na')); // false

// _____________________________________________
/*    
     STR.SLICE(START, END)
     Corta a string de acordo com os valores de start e end.
*/
const transação1 = 'Deposito de cliente'
const transação2 = 'Deposito de cliente'
const transação3 = 'Deposito de cliente'

// console.log(transação1.slice(0, 5)) //de START a END
// console.log(transação2.slice(10, 200)) //de START a END
// console.log(transação3.slice(2, -2)) //corta os dois primeiros e os dois ultimos

console.log(transação1.slice(12)) //Corta a primeira posição
console.log(transação2.slice(1)) //Corta as 5 primeira posições
console.log(transação3.slice(-4)) //pega as 4 ultimas posições

// _____________________________________________
/*    
     STR.SUBSTRING(START, END)
     Corta a string de acordo com os valores de start e end. Não funcionar com valores negativos como o slice.
*/
const linguagem1 = 'Javascript'
console.log(linguagem1.substring(0,4))
console.log(linguagem1.substring(0,1))
console.log(linguagem1.substring(2))
//console.log(linguagem1.substring(-1))// não funciona com numero negativo

// _____________________________________________
/*    
     STR.INDEXOF(SEARCH) E STR.LASTINDEXOF(SEARCH)
     Retorna o index da string, assim que achar o primeiro resultado ele já retorna. No caso do lastIndexOf ele retorna o último resultado.
*/
const instrumento = 'violão'
console.log(instrumento.indexOf('o'))// primeiro resutado
console.log(instrumento.lastIndexOf('o'))// Ultimo resutado

// _____________________________________________
/*    
     STR.PADSTART(N, STR) E STR.PADEND(N, STR)
     Aumenta o tamanho da string para o valor de n. Ou seja, uma string com 8 caracteres, se passarmos n = 10, ela passará a ter 10 caracteres. O preenchimento é feito com espaços, caso não seja declarado o segundo argumento.
*/

const listaPrecos = ['R$ 9,99', 'R$ 129', 'R$ 12000']
listaPrecos.forEach((preco) =>{
     console.log(preco.padStart(10, '.'))
})
console.log(listaPrecos[0].padStart(10, '.'))
console.log(listaPrecos[0].padEnd(10, '.'))


// _____________________________________________
/*    
     STR.REPEAT(N)
     Repete a string (n) vezes
*/
const frase1 = 'Felipe ';

console.log(frase1.repeat(5)); // TaTaTaTaTa


// _____________________________________________
/*    
     STR.REPLACE(REGEXP|SUBSTR, NEWSTR|FUNCTION)
     Troca parte da string por outra. Podemos utilizar uma regular expression ou um valor direto. Se usarmos um valor direto ele irá trocar apenas o primeiro valor que encontrar.
*/
let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';
listaItens = listaItens.replace(/[ ]+/g, ', ');

let preco = 'R$ 1200,43';
console.log(preco = preco.replace(',', '.')); // 'R$ 1200.43'


// _____________________________________________
/*    
     STR.SPLIT(PADRAO)
     Divide a string de acordo com o padrão passado e retorna uma array.
*/
const listaItens1 = 'Camisas Bonés Calças Bermudas Vestidos Saias'
const arrayItens = listaItens1.split(' ')
console.log(arrayItens)


// _____________________________________________
/*    
     STR.TOLOWERCASE() E STR.TOUPPERCASE()
     Retorna a string em letras maiúsculas ou minúsculas. Bom para verificarmos input de usuários.
*/
const sexo1 = 'Feminino';
const sexo2 = 'feminino';
const sexo3 = 'FEMININO';

console.log((sexo1.toLowerCase() === 'feminino')); // true
console.log((sexo2.toLowerCase() === 'feminino')); // true
console.log((sexo3.toUpperCase() === 'feminino')); // false


// _____________________________________________
/*    
     STR.TRIM(), STR.TRIMSTART(), STR.TRIMEND()
     Retorna a string em letras maiúsculas ou minúsculas. Bom para verificarmos input de usuários.
*/
const valor = '   R$ 23.00   '
console.log(valor.trim())
console.log(valor.trimStart())
console.log(valor.trimEnd())