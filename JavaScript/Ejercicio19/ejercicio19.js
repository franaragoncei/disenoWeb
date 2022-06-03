var verArray = document.getElementById('verArray')
var input = document.getElementById('input')
var addElement = document.getElementById('addElement')
var lista = document.getElementById('lista')
var miArray = []

addElement.addEventListener('click', function () {
    miArray.push(input.value)
    alert('Añadido Satisfactoriamente.')
})

verArray.addEventListener('click', function () {
    lista.innerHTML = ''
    // for (let i = 0; i < miArray.length; i++) {
    //     lista.innerHTML += '<li>' + miArray[i] + '</li>'
    // }

    miArray.forEach(function(elemento){
        lista.innerHTML += '<li>' + elemento + '</li>'
    })
})