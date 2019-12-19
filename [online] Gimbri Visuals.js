// Gimbri Song
//s0.initScreen()

src(s0)
	.contrast(1.15)
//	.scrollX(7,0.1)
	.modulate(noise(0.09))
	.scale(1.1,1)
	.blend(s0,0.65)
	.modulate(noise(0.09))
	.scale(1.9,1)
//	.scrollX(7,0.1)
//	.modulateRotate(osc(1,0.02))
	.blend(s0,0.65)
	.scale(1.1,1)
	.contrast(1.25)
//	.scrollX(7,0.1)
//	.kaleid(5)
//	.scale(a.fft[0]*60,a.fft[0]*80)
	.out()

s1 = s0

//print(a.fft[0])
