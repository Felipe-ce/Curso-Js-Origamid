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