var boton = document.getElementById('boton')
var parrafo = document.getElementById('parrafo')

boton.addEventListener('click', function () {
    fetch('https://api.chucknorris.io/jokes/random')
        .then(respuesta => respuesta.json())
        .then(datos => {
            console.log(datos);
            parrafo.innerHTML = '<p>' + datos.url + '</p>'
        })
})