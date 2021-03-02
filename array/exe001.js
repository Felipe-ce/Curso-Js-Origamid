let videoGames = ['Switch', 'xbox one', 'PS4', 'xbox', '3DS']

for (let i = 0; i <= videoGames.length; i++) {
  console.log(videoGames[i].toLowerCase())
  if (videoGames[i].toLowerCase() == 'ps4') {
    break
  }
}

const frutas = ['banana', 'uva', 'manga', 'pera', 'limao'];
frutas.forEach((fruta, index) =>{
  if (fruta === 'pera') {
    console.log(`A furta: ${fruta}, esta na posição: ${index} do array`)
  }
})

//aray dos anos que o brasil foi campeao

const copaMundial = [1990, 1991, 1992, 1993, 1994];
copaMundial.forEach((ano) => {
  console.log(`O Brasil foi campeão mundial em: ${ano}`)
})

const carros = ['gol', 'fox', 'opala', 'mercedes']
let carroVendido = carros.pop()
console.log(carroVendido, carros)