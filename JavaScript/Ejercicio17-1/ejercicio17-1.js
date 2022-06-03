var parrafo = document.getElementById('parrafo')
var misCoches = ['BMW', 'Volvo', 'Saab', 'Ford', 'Fiat', 'Audi']

// misCoches.forEach(function (elemento, indice) {
//     if (misCoches.length - 1 == indice) {
//         parrafo.innerHTML += elemento
//     } else {
//         parrafo.innerHTML += elemento + ', '
//     }
// })

misCoches.forEach((elemento, indice) => {
    if (misCoches.length - 1 == indice) {
        parrafo.innerHTML += elemento
    } else {
        parrafo.innerHTML += elemento + ', '
    }
} )