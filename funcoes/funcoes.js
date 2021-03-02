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
let div = document.querySelector('.btn')
    div.addEventListener('click', clicar)
    div.addEventListener('mouseenter', enter)
    div.addEventListener('mouseout', saiu)


    function clicar() {
      div.innerText = `Clicou`
      div.style.background = 'red'
    }
    function enter() {
      div.innerText = "entrou";
    }
    function saiu() {
      div.innerText = "Saiu";
    }