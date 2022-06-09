var contenedor = document.getElementById('contenedor')

fetch('https://gateway.marvel.com:443/v1/public/comics?apikey=9764998abbb50d44a0021c84faf7b4e9')
    .then(respuesta => respuesta.json())
    .then(datos => {
        console.log(datos);
        datos.data.results.forEach(elemento => {
            console.log(elemento);
            contenedor.innerHTML += (
                '<div id="serie">' +
                '<div id="imagen">' +
                '<img src="' + elemento.thumbnail.path + '.' + elemento.thumbnail.extension + '"></img>' +
                '</div>' +
                '<h3 id="nombre">' + elemento.title + '</h3>' +
                '<p id="descripcion">' + elemento.description + '</p>' +
                '</div>'
            )
        })
    })