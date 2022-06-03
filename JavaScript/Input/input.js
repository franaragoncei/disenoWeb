var boton = document.getElementById('miBoton')
var input = document.getElementById('nombre')


boton.addEventListener('click', function () {
    let prueba = input.value
    console.log(prueba);
    if(prueba == 'hola'){
        console.log('ha escrito hola');
    }else{
        console.log('no ha escrito hola');
    }
})