var parrafo = document.getElementById('parrafo')

// parrafo.classList.add('rojo')

// parrafo.classList.remove('rojo')

document.getElementById('boton').addEventListener('click', function(){
    // parrafo.classList.toggle('azul')
    // console.log(parrafo.classList.contains('azul'));
    parrafo.classList.replace('azul', 'verde')
})