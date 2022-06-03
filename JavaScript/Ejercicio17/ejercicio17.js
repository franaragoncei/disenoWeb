var parrafo = document.getElementById('parrafo')
var misCoches = ['BMW', 'Volvo', 'Saab', 'Ford', 'Fiat', 'Audi']

for (let i = 0; i < misCoches.length; i++) {
    if (misCoches.length - 1 == i) {
        parrafo.innerHTML += misCoches[i]
    } else {
        parrafo.innerHTML += misCoches[i] + ', '
    }

}