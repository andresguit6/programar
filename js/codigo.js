function aleatorio (min,max){
    return Math.floor(Math.random()* ( max - min + 1 ) + min)
}
function eleccion (jugada){
    let resultado = ""
    if ( jugada == 1 ) {
        resultado = "piedra 🪨"
    } else if( jugada == 2 ) {
        resultado = "papel 🧻"
    }
    else if (jugada ==3) {
        resultado = "tijeras ✂️"
    }
    else  {
        resultado = "mal elegido"
    }
    return resultado    
}
// 1 es piedra 2 es papel 3 es tijera 
let jugador = 0
let min = 1
let max = 3
let triunfos = 0
let perdidas = 0


while ( triunfos < 3 && perdidas < 3){
    pc = aleatorio(1,3)
    jugador = prompt("elige: 1 para piedra, 2 para papel, 3 para tijera")
    //alert("elegiste " + jugador)   

    alert ("tu eliges: " + eleccion (jugador))
    alert("pc elige: " + eleccion (pc))
    
    //combate
    if ( pc == jugador){
        alert("empate")
    } else if (jugador == 1 && pc == 3){
        alert ("ganaste")
        triunfos = triunfos + 1
    } else if (jugador ==2 && pc == 1 ){
        alert("ganaste")
        triunfos = triunfos + 1
    } else if (jugador ==3 && pc == 2 ){
        alert("ganaste")
        triunfos = triunfos + 1
    }
    else {
        alert("perdiste")
        perdidas = perdidas + 1
    }
  }

 alert (" ganaste " + triunfos + " veces. perdiste " + perdidas + " veces ")