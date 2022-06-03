var lista = document.getElementById('lista')
var miArray = ['manzana', 'pera', 'fresa', 'mochila','manzana', 'pera', 'fresa', 'mochila']

miArray.forEach(function(elemento){
    lista.innerHTML += '<option>'+elemento+'</option>'
})