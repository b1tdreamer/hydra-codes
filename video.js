// create an html5 video element
vid = document.createElement('video')
vid.autoplay = true
vid.loop = true
// get path to video using getPaths() representing current directory in atom
vid.src = 'E:/No sync/GimbriSong/Proxies/DJI_0775_Proxy.mp4'
//atom.project.getPaths()[0]+'/assets/codeground.webm'

// use video within hydra
s0.init({src: vid})
src(s0)
  .scale(1.8,1)
//  .rotate(0, 0.2)
//  .repeat(5, 3, 0.5)
//  .saturate(3.0)
  .color(1.0, 0.7, -1)
  .scrollX(0, -0.1)
//  .diff(osc(0.2, 0.1, 0.2))
  .kaleid(5)
  .blend(s0,0.75)
  .out()
