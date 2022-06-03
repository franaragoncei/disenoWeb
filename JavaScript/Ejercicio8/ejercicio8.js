var input = document.getElementById('entrada')
var boton = document.getElementById('boton')
var lista = document.getElementById('lista')

boton.addEventListener('click', function () {
    if (input.value == '') {
        alert('Vacío')
    } else {
        lista.innerHTML += '<li>' + input.value + '</li>'
    }
})