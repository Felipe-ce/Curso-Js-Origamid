// console.log(Number.isNaN(false))
// console.log(Number.isInteger(20))
// console.log(Number.isInteger(20.6))

// console.log(Number.isSafeInteger(20))


// let preco = 99.994911
// console.log(preco.toLocaleString('en-us', {style: 'currency', currency: 'USD'}))
// console.log(preco.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}))

// let num1 = 100,
//     num2 = 50,
//     num3 = 20;

// console.log(Math.max(num1, num2, num3))



/*
Retorne o maior numero da lista abaixo
*/


// Retorne um número aleatório
// entre 1050 e 2000
const numeroAleatorioMax = Math.floor(Math.random() * (2000 - 1050 + 1 ) +1050)
//console.log(numeroAleatorioMax)

// Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 108, 0, 16';

const arrayNumeros = numeros.split(', ')
const numeroMax = Math.max(...arrayNumeros)
// console.log(numeroMax)


// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222',
                     'R$ 240  ', 'r$  200'];

function limparPreco(preco) {
  preco = Number(preco.toUpperCase().replace('R$', '').trim().replace(',', '.'))
  preco = +preco.toFixed(2);
  return preco
}


let soma = 0;
listaPrecos.forEach((item)=>{
  soma += limparPreco(item)
})
console.log(soma.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}))