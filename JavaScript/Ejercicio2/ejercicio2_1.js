var boton = document.getElementById('miBoton')
var parrafo = document.getElementById('parrafo')
var contenedor = document.getElementById('contenedor')
var usuario = 'Fran'
var apellido = 'Aragón'
var nombreCompleto = 'Mi nombre es ' + usuario + ' y mi apellido es ' + apellido

boton.addEventListener('click', function () {
    parrafo.innerHTML += 2 * 3
    console.log(nombreCompleto);
    contenedor.innerHTML = ''
})