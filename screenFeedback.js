s0.initScreen()
src(s0)
  	.out(o0)

osc(0.2,0.1,9)
	.kaleid(9)
	.colorama(4)
	.rotate(-0.005,0.3)
//	.scrollX(0.1,0.01)
//	.scrollY(0.1,0.01)
//	.scale(1.1,1.2)
//	.modulateScale(osc())
	.diff(o0)
	.modulateHue(o0,3)
	.saturate(0.7)
	.out(o1)

render(o1)
