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
     STR.SLICE(START, END)
     Corta a string de acordo com os valores de start e end.
*/