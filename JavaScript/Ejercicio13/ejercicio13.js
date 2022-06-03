// var tarjetasIzquierda = document.getElementsByClassName('izquierda')
// var tarjetasDerecha = document.getElementsByClassName('derecha')
var tarjetas = document.getElementsByClassName('tarjeta')

for (let i = 0; i < tarjetas.length; i++) {
    tarjetas[i].addEventListener('mouseenter', function () {
        tarjetas[i].classList.add('rotar')
    })

    tarjetas[i].addEventListener('mouseleave', function () {
        tarjetas[i].classList.remove('rotar')
    })
}


// console.log(tarjetasIzquierda);

// for (let i = 0; i < tarjetasIzquierda.length; i++) {
//     console.log(i)
//     console.log(tarjetasIzquierda[i]);
//     tarjetasIzquierda[i].addEventListener('mouseenter', function () {
//         tarjetasIzquierda[i].classList.add('rotar')
//     })

//     tarjetasIzquierda[i].addEventListener('mouseleave', function () {
//         tarjetasIzquierda[i].classList.remove('rotar')
//     })
// }

// for (let i = 0; i < tarjetasDerecha.length; i++) {
//     tarjetasDerecha[i].addEventListener('mouseenter', function(){
//         tarjetasDerecha[i].classList.add('rotar')
//     })

//     tarjetasDerecha[i].addEventListener('mouseleave', function(){
//         tarjetasDerecha[i].classList.remove('rotar')
//     })
// }