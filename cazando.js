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
    comidaX=canvas.width-ANCHO_COMIDA;
    comidaY=canvas.height-ALTO_COMIDA;
    actualizarCanva();
}

function graficarGato() 
{
    graficarRectangulo(gatoX,gatoY,ANCHO_GATO,ALTO_GATO,"black");
}
function graficarComida() 
{
    graficarRectangulo(comidaX,comidaY,ANCHO_COMIDA,ALTO_COMIDA,"green");    
}

function graficarRectangulo(x,y,ancho,alto,color) 
{
    ctx.fillStyle=""+color;
    ctx.fillRect(x,y,ancho,alto);
}

function limpiarCanva() 
{
    ctx.clearRect(0,0,canvas.width,canvas.height);
}
function actualizarCanva() 
{
    limpiarCanva();
    graficarGato();
    graficarComida();
}
//MOVIMIENTO
function moverIzquierda() 
{
    gatoX=gatoX-10;
    actualizarCanva();
}
function moverDerecha() 
{
    gatoX=gatoX+10;
    actualizarCanva();
}
function moverArriba() 
{
    gatoY=gatoY-10;
    actualizarCanva();
}
function moverAbajo() 
{
    gatoY=gatoY+10;
    actualizarCanva();
}