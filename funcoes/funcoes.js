// function calcImc(peso, altura) {
//   const imc = peso / (altura ** 2)
//   return imc
// }


// function corFavorita(cor) {
//   if (cor === 'azul') {
//     return `Cor favorita: ${cor}`
//   } else if (cor === 'verde'){
//     return `Cor favorita: ${cor}`
//   } else{
//     return `Você não gosta de nada`
//   }
// }
// console.log(corFavorita())
// let div = document.querySelector('.btn')
//     div.addEventListener('click', clicar)
//     div.addEventListener('mouseenter', enter)
//     div.addEventListener('mouseout', saiu)


//     function clicar() {
//       div.innerText = `Clicou`
//       div.style.background = 'red'
//     }
//     function enter() {
//       div.innerText = "entrou";
//     }
//     function saiu() {
//       div.innerText = "Saiu";
//     }


/*
  PROPRIEDADES
  Function.length retorna o total de argumentos da função. Function.name retorna uma string com o nome da função.
*/
function areaQuadrado(lado) {
  return lado * lado;
}
console.log(areaQuadrado.length, areaQuadrado.name)


/*
  FUNCTION.CALL()
  function.call(this, arg1, arg2, ...) executa a função, sendo possível passarmos uma nova referência ao this da mesma. 
*/
// const carros = {
//   marca: 'Ford',
//   ano: 2018
// }
// function descricaoCarro() {
//   console.log(this.marca + ' ' + this.ano)
// }

//descricaoCarro()//Indefinido
//descricaoCarro.call()//Indefinido
//descricaoCarro.call(carros)//'Ford 2018'

const carro = {
  marca: 'celta',
  ano: 2002
}
function descricaoCarro2(velocidade) {
  console.log(this.marca + ' ' + this.ano + ' ' + 'velocidade: ' + velocidade)
}
descricaoCarro2.call({marca: 'celta', ano: 2002}, 160)//com o call o this vai tomar como referencia o objeto que esta passando.