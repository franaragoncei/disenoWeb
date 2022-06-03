var boton = document.getElementById('boton')
var entrada = document.getElementById('entrada')
var respuesta = document.getElementById('respuesta')

boton.addEventListener('click', function () {
    if (entrada.value == '') {
        respuesta.innerHTML = '*Campo obligatorio*'
    }else{
        alert('Email registrado con éxito.')
        respuesta.innerHTML = ''
    }
})