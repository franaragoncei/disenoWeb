var verArray = document.getElementById('verArray')
var input = document.getElementById('input')
var addElement = document.getElementById('addElement')
var lista = document.getElementById('lista')
var miArray = []

verArray.addEventListener('click', function(){
    lista.innerHTML = ''
    miArray.forEach(function(elemento){
        lista.innerHTML += '<li>'+elemento+'</li>'
    })
})

addElement.addEventListener('click', function(){
    miArray.push(input.value)
    alert('Añadido correctamente')
    lista.innerHTML = ''
})