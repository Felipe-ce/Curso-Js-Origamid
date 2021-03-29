//crie uma função para verificar se o valor é truthy
function isTruthy(dado) {
  return !!dado;
}

//Função paa retornar o perimetro de um quadrado
function perimetro(l1, l2, l3, l4) {
  return `O perimero é: ${l1 + l2 + l3 + l4}`
}

//Função para retonar nome comprelo
function nomeCompleto(nome, sobrenome) {
  let completo = nome + ' ' + sobrenome
  return `Nome completo: ${completo}`
}

// Verificar se é pa
function numPar(numero) {
  console.log(typeof(numero))
  if (typeof(numero) !== 'number'){
    return `Não é um numero`
  }else if (numero % 2 == 0) {
    return `O numero: ${numero} é par`
  } else {
    return `O numero: ${numero} é Impar`
    
  }
}

addEventListener('click', function () {
  console.log('Felipe Xavier')
})


// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const paragrafo = Array.from(document.querySelectorAll('p'))

const totalCaracteres = paragrafo.reduce((acumulador, item) =>{
  return acumulador + item.innerText.length
}, 0)

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.
function criarElemento(tag, classe, conteudo) {
  const elemento = document.createElement(tag)
  classe ? elemento.classList.add(classe) : null
  conteudo ? elemento.innerText = conteudo : null
  return elemento
}
console.log(criarElemento('p', 'ativo', 'Felipe Xavier o mais brabo'))

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico
const h1Titulo = criarElemento.bind(null, 'h1', 'titulo')
console.log(h1Titulo('Cusro de Js'))