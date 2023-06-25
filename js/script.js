const imagenes = [
    "Imagenes/1.png",
    "Imagenes/2.png",
    "Imagenes/3.png",
    "Imagenes/4.png"
];

document.Imagen.src = imagenes[0];

let SliderDerecha = document.querySelector('.slider-derecho');
let SliderIzquierda = document.querySelector('.slider-izquierdo');
let Contador= 0;

function MoverDerecha(){
    Contador++;
    if(Contador > imagenes.length - 1){
        Contador = 0;
    }
    document.Imagen.src = imagenes[Contador];
}
let Intervalo = setInterval(MoverDerecha, 10000);
SliderDerecha.addEventListener("click", function(){
    clearInterval(Intervalo);
    MoverDerecha();
    Intervalo = setInterval(MoverDerecha, 10000);
})


function MoverIzquierda(){
    Contador--;
    if(Contador < 0){
        Contador = imagenes.length - 1;
    }
    document.Imagen.src = imagenes[Contador];
}
SliderIzquierda.addEventListener("click", function(){
    clearInterval(Intervalo);
    MoverIzquierda();
    Intervalo = setInterval(MoverIzquierda, 10000);
})