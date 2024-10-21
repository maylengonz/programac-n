// Actividad 1

let frase = document.querySelector('#frase' )
let respuestaP = document.querySelector ('#respuesta')
let boton = document.querySelector ('#mandar')


if (frase.value == '¿Cómo estás?') {
    respuestaP.textContent = 'Bien y vos?'
}else{
    respuestaP.textContent = 'No entiendo'
}


// Actividad 2 y 3

let alumnos = document.querySelector('#estudiantes')
let botónIngresa = document.querySelector('#enviar')
let parrafoAlum = document.querySelector('#parrafoAlum')


let listaEstu = []
 
botónIngresa.onclick = function() {
    listaEstu.push ( ' ' + alumnos.value)
    parrafoAlum.textContent = listaEstu
}
