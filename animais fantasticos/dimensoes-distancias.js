// Verifique a distância da primeira imagem
// em relação ao topo da página
const firstImg = document.querySelector('img')
// console.log(firstImg.offsetTop)

// Retorne a soma da largura de todas as imagens
function larguraImagens(){
  const images = document.querySelectorAll('img')
  let largura = 0
  images.forEach((item) =>{
    largura += item.offsetWidth;
  }) 
  // console.log(largura)
  
}
window.onload = function () {
  larguraImagens()
}
// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const allLinks = document.querySelectorAll('a')
console.log(allLinks)


allLinks.forEach((link) =>{
  const linkWiddth = link.offsetWidth;
  const linkHeight = link.offsetHeight;

  if (linkWiddth >= 48 && linkHeight >= 48) {
    console.log(link, `O link Possui acessibilidade`)
  }else{
    console.log(console.log(link, `O link não Possui acessibilidade`)
    )
  }
})

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
