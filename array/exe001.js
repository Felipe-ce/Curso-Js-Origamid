let videoGames = ['Switch', 'xbox one', 'PS4', 'xbox', '3DS']

for (let i = 0; i <= videoGames.length; i++) {
  console.log(videoGames[i].toLowerCase())
  if (videoGames[i].toLowerCase() == 'ps4') {
    break
  }
}