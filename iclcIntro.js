ICLC

s0.initCam(1)

src(s0)
//  .kaleid(4)
  .out(o0)

osc(6, 0.2, () => (a.fft[1]*2))
.diff(o0)
.out(o1)

render(o1)
