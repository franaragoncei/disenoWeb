var seccion = document.getElementById('seccion')

fetch('http://api.mediastack.com/v1/news?access_key=de05afdda35b0cee5043566151a39caa&countries=es')
    .then(respuesta => respuesta.json())
    .then(datos => {
        console.log(datos);
        datos.data.forEach(elemento => {
            console.log(elemento);
            if(elemento.image == null){
                seccion.innerHTML += (
                    '<div>' +
                    '<a target="_blank" href="' + elemento.url + '">' +
                    '<img src="https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg" alt="foto" />' +
                    '<p>' + elemento.title + '</p>' +
                    '</a>' +
                    '</div>'
                )
            }else{
                seccion.innerHTML += (
                    '<div>' +
                    '<a target="_blank" href="' + elemento.url + '">' +
                    '<img src="' + elemento.image + '" alt="foto" />' +
                    '<p>' + elemento.title + '</p>' +
                    '</a>' +
                    '</div>'
                )
            }
            
        })
    })