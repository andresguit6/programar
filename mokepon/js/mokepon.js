function iniciarJuego () {
    let botonMascotaJugador = document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener("click", selecionarMascotaJugador)
}

function selecionarMascotaJugador () {
    let inputHipodoge = document.getElementById ("Hipodoge")
    let inputcapipepo = document.getElementById ("capipepo")
    let inputratigueya = document.getElementById ("ratigueya")
    let inputbotonmascota = document.getElementById ("boton-mascota")
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
}
window.addEventListener("load", iniciarJuego)
