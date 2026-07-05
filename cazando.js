let canvas=document.getElementById("areaJuego");
let ctx=canvas.getContext("2d");

const ALTO_GATO=50;
const ANCHO_GATO=40;

const ALTO_COMIDA=20;
const ANCHO_COMIDA=20;

let gatoX= 0;
let gatoY= 0;
let comidaX=0;
let comidaY=0;

function iniciarJuego() 
{
    gatoX= (canvas.width-ANCHO_GATO)/2;
    gatoY= (canvas.height-ALTO_GATO)/2;
    graficarGato();
    comidaX=canvas.width-ANCHO_COMIDA;
    comidaY=canvas.height-ALTO_COMIDA;
    graficarComida();
}

function graficarGato() 
{
    ctx.fillStyle="black";
    ctx.fillRect(gatoX,gatoY,ANCHO_GATO,ALTO_GATO);
}
function graficarComida() 
{
    ctx.fillStyle="green";
    ctx.fillRect(comidaX,comidaY,ANCHO_COMIDA,ALTO_COMIDA);
    
}