var boton = document.getElementById('miBoton')
var contenedor = document.getElementById('contenedor')
var usuario = 'Fran'

boton.addEventListener('click', function () {
    contenedor.innerHTML = '<p class="prueba">Bienvenido, ' + usuario + '</p>'
})