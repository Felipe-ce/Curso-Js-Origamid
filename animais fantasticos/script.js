const allImg = document.querySelectorAll('img')
allImg.forEach((img) =>{
  console.log(img)
})

const animais = document.querySelectorAll("img[src^='img/image']")
animais.forEach((img) =>{
  console.log(img)
})

const allLinks = document.querySelectorAll("a[href^='#']")
allLinks.forEach((link) =>{
  console.log(link)
})

const firstH2 = document.querySelector(".animais-descricao h2")
console.log(firstH2)

const lastP = document.querySelectorAll("p")
console.log(lastP[--lastP.length])

const allP = document.querySelectorAll('p')
allP.forEach((p) => {return console.log(p)})
