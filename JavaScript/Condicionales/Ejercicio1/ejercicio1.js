var boton = document.getElementById('boton')
var contenedor = document.getElementById('contenedor')
var color = 'naranja'
var coche = 'ferrari'

boton.addEventListener('click', function () {
    if (color == 'azul' && coche == 'ferrari') {
        contenedor.innerHTML = '<p class="color">El color es azul y el coche es ferrari</p>'
    } else if (color == 'amarillo' || coche == 'renault') {
        contenedor.innerHTML = '<p>El color es amarillo o el coche es ferrari</p>'
    } else if(color != 'verde'){
        contenedor.innerHTML = '<p>El color no es verde</p>'
    }
})