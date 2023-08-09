function iniciarJuego () {
    let botonMascotaJugador = document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener("click", selecionarMascotaJugador)
}

function selecionarMascotaJugador () {
    let inputHipodoge = document.getElementById ("Hipodoge")
    let inputcapipepo = document.getElementById ("capipepo")
    let inputratigueya = document.getElementById ("ratigueya")
    let inputbotonmascota = document.getElementById ("boton-mascota")
    if (inputHipodoge.checked) {
        alert("selecionaste hipodogue")
    } else if (inputcapipepo.checked){
        alert("selecionaste capipepo")
    } else if (inputratigueya.checked){
        alert("selecionaste ratigueya")
    } else {
        alert("seleciona una mascota")
    }
}


window.addEventListener("load", iniciarJuego)
