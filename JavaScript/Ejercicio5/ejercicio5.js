var boton = document.getElementById('miBoton')
var input = document.getElementById('input')
var lista = document.getElementById('lista')

boton.addEventListener('click', function () {
    lista.innerHTML += '<li>' + input.value + '</li>'
})