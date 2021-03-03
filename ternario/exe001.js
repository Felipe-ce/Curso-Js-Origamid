// let idade = 19
// let habilitado = true;
// const podeDirigir = (idade >= 18 && habilitado) ? 'Pode dirigir' : 'Não Pode dirigir'

// console.log(podeDirigir)

// // outro metodo é retorar somente true ou false, pois este teste ja retonar true ou false
// // ou seja, não faz sentido retonar valores boleanos, faz sentido retornar numeros, estrings etc
// // const podeDirigir = (idade >= 18 && habilitado) // ? 'Pode dirigir' : 'Não Pode dirigir'


// //some o valor de skroll abaixo,
// // atribuindo mais 500
// let scroll = 1000
// scroll += 500
// console.log(scroll)

// /*
// coonceda dar credito se o cliente possuir casa e carro
// */
// let possuiCasa = true
// let possuiCarro = true

// let darCredito = (possuiCasa && possuiCarro)
// console.log(darCredito)

// {
//   var cor = 'preto'
//   const marca = 'fiat'
//   let portas = 4
// }
// // console.log(cor, marca, portas)
// const dois = 2
// function somarDois(x) {
//   return x + 2
// }
// function dividirDois(x) {
//   return x / dois
// }
// console.log(somarDois(4))
// console.log(dividirDois(10))

const animaisdesc = document.querySelectorAll('.animaldesc')
const cachorro = document.querySelector('.cachorro')
cachorro.addEventListener('click', function () {
  animaisdesc.forEach((item) =>{
    item.classList.toggle('ativo')
  })
})