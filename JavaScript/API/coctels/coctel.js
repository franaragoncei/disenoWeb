var contenedor = document.getElementById('contenedor')
var input = document.getElementById('coctel')

input.addEventListener('keypress', function () {
    console.log('hola');
    contenedor.innerHTML = ''
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + input.value)
        .then(respuesta => respuesta.json())
        .then(datos => {
            console.log(datos);
            if (datos.drinks == null) {
                contenedor.innerHTML = '<p>Lo sentimos, no hay coincidencias con su búsqueda <span class="azul">' + input.value + '</span></p>'
            } else {
                datos.drinks.forEach(element => {
                    console.log(element);
                    contenedor.innerHTML += (
                        '<div id="serie">' +
                        '<div id="imagen">' +
                        '<img src=' + element.strDrinkThumb + '></img>' +
                        '</div>' +
                        '<h3 id="nombre">' + element.strDrink + '</h3>' +
                        '<p id="descripcion">' + element.strInstructions + '</p>' +
                        '</div>'
                    )
                })
            }

        })
})