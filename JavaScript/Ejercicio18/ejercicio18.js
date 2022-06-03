var clasificacion = document.getElementById('clasificacion')
var clasificacionActualizada = document.getElementById('clasificacionActualizada')
var personas = ['Ana', 'Oswaldo', 'Raúl', 'Celia', 'María', 'Antonio']

personas.forEach(function (elemento) {
    clasificacion.innerHTML += '<li>' + elemento + '</li>'
})

// CELIA ADELANTA A RAUL
personas.splice(3, 1, 'Raul')
personas.splice(2, 1, 'Celia')
// ANTONIO ES DESCALIFICADO
personas.pop()
// SE CLASIFICAN DOS NUEVOS CONCURSANTES, ROBERTO Y AMAYA, DESPUÉS DE ANA Y ANTES DE OSWALDO
personas.splice(1, 0, 'Roberto', 'Amaya')
// NUEVO PARTICIPANTE QUE SE COLOCA EN PRIMER LUGAR, MARTA.
personas.unshift('Marta')

// CLASIFICACIÓN ACTUALIZADA
personas.forEach(function (elemento) {
    clasificacionActualizada.innerHTML += '<li>' + elemento + '</li>'
})