let ataqueJugador 

function iniciarJuego () {
    let botonMascotaJugador = document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener("click", selecionarMascotaJugador)

    let botonFuego = document.getElementById ("boton-fuego")
    botonFuego.addEventListener("clic" , ataquefuego)
    let botonAgua = document.getElementById ("boton-agua")
    botonAgua.addEventListener("clic" , ataqueAgua)
    let botonTierra = document.getElementById ("boton-tierra") 
    botonTierra.addEventListener("clic" , ataqueTierra)

}

function selecionarMascotaJugador () {
    let inputHipodoge = document.getElementById ("Hipodoge")
    let inputcapipepo = document.getElementById ("capipepo")
    let inputratigueya = document.getElementById ("ratigueya")
    let spanMascotaJugador = document.getElementById ("mascota-jugador")

    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = "hipodogue"
    } else if (inputcapipepo.checked){
        spanMascotaJugador.innerHTML = "capipepo"
    } else if (inputratigueya.checked){
        spanMascotaJugador.innerHTML = "ratigueya"
    } else {
        alert("seleciona una mascota")
    }

    selecionarMascotaEnemigo ()

}

function selecionarMascotaEnemigo() {
    let ataqueAleatorio = aleatorio (1,3)
    let spanMascotaEnemigo = document.getElementById ("mascota-enemigo")
     
    if (ataqueAleatorio == 1) {
        spanMascotaEnemigo.innerHTML = "hipodogue "
    } else if (ataqueAleatorio == 2 ) {
        spanMascotaEnemigo.innerHTML = "capipepo "
    } else {
        spanMascotaEnemigo.innerHTML = "ratigueya "
    }

}

function ataquefuego () {
    ataqueJugador = "fuego"
}   alert (ataqueJugador)

function ataqueAgua () {
    ataqueJugador = "agua"
}   alert (ataqueJugador)

function ataqueTierra () {
    ataqueJugador = "tierra"
}   alert (ataqueJugador)

function aleatorio (min,max){
        return Math.floor(Math.random()* ( max - min + 1 ) + min)
} 

window.addEventListener("load", iniciarJuego)
