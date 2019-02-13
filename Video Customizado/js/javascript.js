//Recogemos todos los elementos del html
function iniciar() {
    //Declaramos maximo a 400 porque es el ancho de la barra de video
    maximo = 400;
    vid = document.getElementById("video");
    reproducir = document.getElementById("botonplay");
    barra = document.getElementById("barra");
    sonido = document.getElementById("botonsonido");
    progreso = document.getElementById("progreso");
    loopvideo = document.getElementById("botonloop");
    rangeValueVol = document.getElementById("rangevol");
    rangeValueSpeed = document.getElementById("rangespeed");
    rangeValueProgress = document.getElementById("rangeprogress");
    tituloreverse = document.getElementById("titulo").className = "tituloReverse";
    titulonormal = document.getElementById("titulo").className = "titulo";
    //Se agregan dos listener para la la funcion playpausa y mover
    reproducir.addEventListener("click", playpausa, false);
    barra.addEventListener("click", mover, false);
}

//Funcion para activar y desactivar el sonido
function activamute() {
    if (vid.muted) {
        vid.muted = false;
        sonido.src = "img/mute.png";
    } else {
        vid.muted = true;
        sonido.src = "img/sonido.png";
    }
}

//Funcion para play y pause del video
function playpausa() {
    if (!vid.paused && !vid.ended) {
        vid.pause();
        reproducir.src = "img/play.png";
        window.clearInterval(bucle);
    } else {
        vid.play();
        reproducir.src = "img/stop.png";
        bucle = setInterval(estado, 1000);
    }
}

//Funcion que se encarga de mover la barra de progreso del video segun la posicion
function estado() {
    if (!vid.ended) {
        var total = parseInt(vid.currentTime * maximo / vid.duration);
        progreso.style.width = total + "px";
    } else {
        progreso.style.width = "0px";
        reproducir.src = "img/play.png";
        window.clearInterval(bucle);
    }
}

//Funcion para poder moverse a la posicion x de la barra de video
function mover(e) {
    if (!vid.paused && !vid.ended) {
        var ratonX = e.pageX - barra.offsetLeft;

        var nuevoTiempo = ratonX * vid.duration / maximo;
        vid.currentTime = nuevoTiempo;
        progreso.style.width = ratonX + "px";
    }
}
window.addEventListener("load", iniciar, false);

//Funcion para hacer loop, es decir bucle del video o no
function loopsino() {
    if (vid.loop) {
        vid.loop = false;
        loopvideo.src = "img/loop.png";
    } else {
        vid.loop = true;
        loopvideo.src = "img/noloop.png";
    }
}

//Funcion para mostrar la url del video
function url() {
    alert(vid.currentSrc);
}

//Funcion para ver la duracion del video
function duracion() {
    alert("La duracion del video es de " + vid.duration + " segundos");
}

//Funcion para controlar el volumen del video
function controlV() {
    vid.volume = rangeValueVol.value;
}

//Funcion para controlar la velocidad del video
function controlspeed() {
    vid.playbackRate = rangeValueSpeed.value;
}

//Funcion para controlar la posicion del video
function controlprogress() {
    vid.currentTime = rangeValueProgress.value;
}

//Funcion que cambia a video 1
function cambiarvideo1() {
    document.getElementById("video1").src = "video/peli.mp4";
    document.getElementById("video").load();
    
}

//Funcion que cambia a video 2
function cambiarvideo2() {
    document.getElementById("video1").src = "video/peli2.mp4";
    document.getElementById("video").load();
}

//Funcion que cambia el estilo del titulo
function entra() {
    tituloreverse;
}

//Funcion que deja el estilo por defecto del titulo
function sale() {
    titulonormal;
}

//Funcion que cambia el color del nav
function cambiacolor() {
    var color = document.getElementById("tipo").value;
    document.getElementById("fondoh").className = color;
}
