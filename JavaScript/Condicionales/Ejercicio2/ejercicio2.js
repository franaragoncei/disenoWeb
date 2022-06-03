var boton = document.getElementById('boton')
var contenedor = document.getElementById('contenedor')

var coche = 'seat'

boton.addEventListener('click', function () {
    switch (coche) {
        case 'renault':
            contenedor.innerHTML = '<p>Soy un renault</p>'
            break;
        case 'cupra':
            contenedor.innerHTML = '<p>Soy un cupra</p>'
            break;
        case 'seat':
            contenedor.innerHTML = '<p>Soy un seat</p>'
            break;
        default:
            contenedor.innerHTML = '<p>No sé que soy</p>'
    }
})