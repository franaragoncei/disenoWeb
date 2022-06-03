var miArray = [3, 8, 10, 'Manzana', 'Pera', 'Fresa']
// HACER UNA COPIA DEL ARRAY
var miCopia = miArray.slice()

console.log(miArray);
console.log(miArray.length);
console.log(miArray[3]);
console.log(miArray[miArray.length - 1]);
// AÑADE AL FINAL DEL ARRAY
miArray.push('Melocoton')
console.log(miArray);
// ELIMINA LA ULTIMA POSICIÓN
miArray.pop()
console.log(miArray);
// AÑADE AL PRINCIPIO DEL ARRAY
miArray.unshift('Melocoton')
console.log(miArray);
// ELIMINAR LA PRIMERA POSICION
miArray.shift()
console.log(miArray);
// SACAR LA POSICIÓN DE UN ELEMENTO
var posicionPera = miArray.indexOf('Pera')
console.log(posicionPera);
// ELIMINAR UN ELEMENTO DE UNA POSICIÓN CONCRETA
miArray.splice(posicionPera, 1)
console.log(miArray);
console.log(miCopia);

// RECORRER ARRAY
var contenedor = document.getElementById('contenedor')
// BUCLE FOR
for (let i = 0; i < miArray.length; i++) {
    contenedor.innerHTML += '<p>' + miArray[i] + '</p>'
}
// BUCLE FOREACH
// miArray.forEach(function (elemento, indice, array) {
//     contenedor.innerHTML += '<p>' + elemento + '</p>'
// })

// BUSCAR EN ARRAY
var encontrado = miArray.find(elemento => elemento == 167)
console.log('Hola: ' + encontrado);

if (encontrado) {
    console.log(true);
}else{
    console.log(false);
}

// SUSTITUIR EN ARRAY
miArray.splice(2, 1, 'Frambuesas', 'Fresas', 'Melocoton')
console.log(miArray);