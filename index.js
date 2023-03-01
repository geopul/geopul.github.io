
document.getElementById("boton").onclick=function() {
    console.log("capturamos el click")
    document.getElementById("mensaje").innerHTML = "¡¡SU CONSULTA FUE ENVIADA!!"
}

document.getElementById("uno").onclick=function(int) {
    console.log("capturamos el click")
    document.getElementById("int").innerHTML = "¡¡GRACIAS POR TU INTERES EN MI PERFIL!! PUEDE REAIZAR SU CONSULTA..."
}

document.getElementById("dos").onclick=function(int) {
    console.log("capturamos el click")
    document.getElementById("int").innerHTML = "¡¡QUE LASTIMA!!"
}