var boton = document.getElementById('boton')
var eliminar = document.getElementById('eliminar')
var titulo = document.getElementById('titulo')
var toggle = document.getElementById('toggle')

boton.addEventListener('click', function () {
    titulo.classList.add('titulo')
})

eliminar.addEventListener('click', function () {
    titulo.classList.remove('titulo')
})

toggle.addEventListener('click', function(){
    titulo.classList.toggle('titulo')
})