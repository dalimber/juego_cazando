let canvas=document.getElementById("areaJuego");
let ctx=canvas.getContext("2d");
let puntaje=0;
let tiempo=10;
let intervalo;

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
    intervalo=setInterval(restarTiempo,1000);
}

function graficarGato() 
{
    graficarRectangulo(gatoX,gatoY,ANCHO_GATO,ALTO_GATO,"black");
}
function graficarComida() 
{
    graficarRectangulo(comidaX,comidaY,ANCHO_COMIDA,ALTO_COMIDA,"green");    
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
    detectarColision();
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
//COMER
function detectarColision() 
{
    if (gatoX + ANCHO_GATO > comidaX && 
        gatoX < comidaX + ANCHO_COMIDA &&
        gatoY + ALTO_GATO > comidaY && 
        gatoY < comidaY + ALTO_COMIDA) 
        {
        reaparecer();
        puntaje=puntaje+1;
        mostrarEnSpan("puntos",puntaje);
        if (puntaje==6) 
            {
            alert("HAS GANADO");
            clearInterval(intervalo);

            }
        } 
        else {
        
    }    
}
//REAPARECER
function reaparecer() 
{
    comidaX=generarAleatorio(0,canvas.width-ANCHO_COMIDA);
    comidaY=generarAleatorio(0,canvas.height-ALTO_COMIDA);
    actualizarCanva();
}
//CUENTA REGRESIVA
function restarTiempo() 
{
    tiempo=tiempo-1;
    mostrarEnSpan("tiempo",tiempo);
    if (tiempo==0) 
    {
        alert("GAME OVER");
        clearInterval(intervalo);
        
    }
    
}