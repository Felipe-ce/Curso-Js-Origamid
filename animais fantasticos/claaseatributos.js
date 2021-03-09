const menu = document.querySelectorAll('.menu a')
menu.forEach((item) =>{
  item.classList.add('ativo')
})

menu.forEach((item) =>{
  item.classList.remove('ativo')
})

menu[0].classList.add('ativo')

const allImg = document.querySelectorAll('img');
allImg.forEach((img, index) =>{
  const possuiAlt = img.hasAttribute('alt')
  console.log(img, possuiAlt)
})

const linkExterno = document.querySelector('a[href^="http"]')
linkExterno.setAttribute('href', 'https://felipeads.com/')