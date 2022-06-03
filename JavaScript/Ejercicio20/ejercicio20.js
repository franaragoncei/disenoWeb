var verArray = document.getElementById('verArray')
var input = document.getElementById('input')
var borrarElemento = document.getElementById('borrarElemento')
var lista = document.getElementById('lista')
var miArray = ['manzana', 'pera', 'fresa', 'mochila']

verArray.addEventListener('click', function () {
    lista.innerHTML = ''
    for (let i = 0; i < miArray.length; i++) {
        lista.innerHTML += '<li>' + miArray[i] + '</li>'
    }
})

borrarElemento.addEventListener('click', function () {
    let pos = miArray.indexOf(input.value);
    if (pos == -1) {
        alert('Lo que buscas no está en el array.')
    } else {
        miArray.splice(pos, 1)
        alert('Eliminado correctamente.')
    }
})