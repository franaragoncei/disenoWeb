var contenedor = document.getElementById('contenedor')
var ingredientes = ['Queso', 'Piña', 'Tomate', 'Jamon', 'Atun', 'Pollo']

for (let i = 0; i < ingredientes.length; i++) {
    contenedor.innerHTML += '<li>' + ingredientes[i] + '</li>'
}

// ingredientes.forEach(function (elemento, indice) {
//     contenedor.innerHTML += '<li>' + elemento + '</li>'
// })