var boton = document.getElementById('miBoton')
var input = document.getElementById('input')
var lista = document.getElementById('lista')

boton.addEventListener('click', function(){
    console.log(input.value.toLowerCase());
    if(input.value.toUpperCase() == 'CEI'){
        alert('La palabra no puede ser CEI')
    }else{
        lista.innerHTML += '<li>'+input.value+'</li>'
    }

    // if(input.value != 'CEI'){
    //     lista.innerHTML += '<li>'+input.value+'</li>'
    // }
})