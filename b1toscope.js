# b1tdreamer psiKaleidoscope

s0.initCam()

src(s0).kaleid(8).out(o0)

osc(10, 0.2, () => (a.fft[1]*90))
.diff(o0)
.out(o1)
render(o1)

## version 2

s0.initCam()
src(s0).kaleid(10).out(o0)

osc(100, 0.01, 1.4)
	.rotate(0, 0.1)
	.mult(osc(10, 0.1).modulate(osc(20).scale(0.6,0.6).rotate(1, 0.4), 1))
	.color(0.1,0.3,0.3)
    .pixelate(9,9)
    .diff(o0)
    .out(o1)

render(o1)

## version 3.1
## Puta locura can varios caleidoscopios y reacción al sonido

s0.initCam(1)
s1.initCam(0)

src(s0)
  .kaleid(20)
//  .scrollX(80, 0.4)
//  .rotate(90)
  .out(o0)

src(s0)
  .scale(1,0.8)
  .out(o1)

osc(() => (a.fft[2]*5), 0.2, 20)
	.diff(o0)
	.scale(0.4,0.6)
	.out(o2)

osc(() => (a.fft[1]*5), 0.2, 20)
	.diff(o1)
	.diff(o2)
	.out(o3)

render(o3)

## version 4
## Luces hacia adentroy camara reconocible

pb.setName("Front")

s0.initCam(1)
s1.initCam(0)

src(s0)
  .scale(1,0.8)
//  .kaleid(10)
  .out(o0)

src(s1)
  .scale(1,0.8)
//  .kaleid(10)
  .out(o1)

osc(20, 0.1,() => a.fft[0] * 10)
	.kaleid(6)
	.color(1.23,0.4,1)
	.rotate(0, 2.5)
	.scale(1.1)
	.diff(o0)
	//.add(o1)
  	.out(o2)

render(o2)

## Por probar

.scrollX(10, 0.1)
.mult(pattern())
.out()
