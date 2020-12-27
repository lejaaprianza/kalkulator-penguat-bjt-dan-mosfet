//BJT
var av = document.getElementById("av");
// var av2 = document.getElementById("av2");
var rc = document.getElementById("rc");
var gm = document.getElementById("gm");
var ic = document.getElementById("ic");
var vc = document.getElementById("vc");
var beta = document.getElementById("beta");
var ie = document.getElementById("ie");
var rb1 = document.getElementById("rb1");
var rb2 = document.getElementById("rb2");
var vb = document.getElementById("vb");
var ve = document.getElementById("ve");
var re = document.getElementById("re");
function exchange(input)
{
const vcc = 15;
const vbe = 0.7;
gm.value = (av.value/rc.value);
ic.value = gm.value*0.025;
vc.value = vcc-(rc.value*ic.value);
var alfa = beta.value/(beta.value+1);
ie.value = ic.value/alfa;
var anu = rb2.value*vcc;
var r = parseFloat(rb2.value)+parseFloat(rb1.value);
vb.value = anu/r;
ve.value = parseFloat(vb.value)-vbe;
re.value = Math.abs(ve.value/ie.value);
}