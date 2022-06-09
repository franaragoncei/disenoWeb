var contenedor = document.getElementById('contenedor')

fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
    .then(respuesta => respuesta.json())
    .then(datos => {
        console.log(datos);
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
    })