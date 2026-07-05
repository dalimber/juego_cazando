let canvas=document.getElementById("areaJuego");
let ctx=canvas.getContext("2d");

const alturaGato=40;
const anchoGato=50;

let personajeX= canvas.width/2;
let personajeY= canvas.height/2;

function iniciar() 
{
    graficarGato();
}

function graficarGato() 
{
    ctx.fillStyle="black";
    ctx.fillRect(personajeX,personajeY,alturaGato,anchoGato);
}