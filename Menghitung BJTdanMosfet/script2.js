//Mosfet
var av2 = document.getElementById("av2");
var id = document.getElementById("id");//input
var vgs = document.getElementById("vgs");//input
var vov = document.getElementById("vov");
var gm2 = document.getElementById("gm2");
var rd = document.getElementById("rd");//input
var rs = document.getElementById("rs");
var rg1 = document.getElementById("rg1");//input
var rg2 = document.getElementById("rg2");//input
var vg = document.getElementById("vg");
var vdd = document.getElementById("vdd");//default
var vs = document.getElementById("vs");
var is = document.getElementById("is");


function exchange(input)
{
const vt = 0.7;
const vdd = 15;
vov.value = vgs.value-vt;
gm2.value = 2*id.value/vov.value;
rd.value = av2.value/gm2.value;
vg.value = rg2.value/(parseFloat(rg2.value)+parseFloat(rg1.value))*vdd;
vs.value = vg.value-vgs.value;
is.value = id.value;
rs.value = Math.abs(vs.value/is.value);
}