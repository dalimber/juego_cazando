function generarAleatorio(min,max) 
{
    let random=Math.random();
    let numero=random*(max);
    let numeroEntero=parseInt(numero);
    return numeroEntero; 
}

function graficarRectangulo(x,y,ancho,alto,color) 
{
    ctx.fillStyle=""+color;
    ctx.fillRect(x,y,ancho,alto);
}