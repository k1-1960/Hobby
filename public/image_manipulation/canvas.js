const {Cards} = require('zeew-canvas');
(async () => {
const mycard = new Cards(1200, 800)
  let filter = {}

  await mycard.setBackground({color: '#FCE8AB', filter: filter})
  await mycard.addImage('../../bg.jpg', 400, 200, {width: 800, height: 600, filter: filter})
  mycard.addText('Zeew API', 925, 80, {size: 60, color: '#000000'})
  mycard.addText('Un rincón de aprendizaje', -20, 100, {size: 80, font: 'Fantasy', color: '#000000', rotate: 90})
console.log(mycard.getImage())
})()