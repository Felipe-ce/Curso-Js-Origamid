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