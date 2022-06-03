var boton = document.getElementById('miBoton')
var parrafo = document.getElementById('parrafo')
var contenedor = document.getElementById('contenedor')

boton.addEventListener('click', function(){
    alert('HAS CLICADO')
    alert('TE REPITO QUE HAS CLICADO')
    parrafo.innerHTML = 'Adios mundo'
    contenedor.innerHTML = '<h3>HOLA SOY UN H3</h3>'
})

parrafo.addEventListener('copy', function(){
    alert('Copiado corectamente')
})



console.log(parrafo);