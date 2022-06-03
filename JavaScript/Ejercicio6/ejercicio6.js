var boton = document.getElementById('miBoton')
var nombre = document.getElementById('nombre')
var apellido = document.getElementById('apellido')
var edad = document.getElementById('edad')

boton.addEventListener('click', function () {
    let nombreAlert = nombre.value
    let apellidoAlert = apellido.value
    let edadAlert = edad.value

    if (nombre.value == '') {
        nombreAlert = 'Vacío'
    }

    if (apellido.value == '') {
        apellidoAlert = 'Vacío'
    }

    if (edad.value == '') {
        edadAlert = 'Vacío'
    }

    alert('Nombre: ' + nombreAlert + ' | Apellido: ' + apellidoAlert + ' | Edad: ' + edadAlert)
})