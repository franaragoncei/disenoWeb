$(function () {
    // TODO EL jQuery
    // CREO MIS VARIABLES
    var opcionJugador
    var opcionMaquina
    var resultado
    var puntosJugador = 0
    var puntosMaquina = 0

    // ASIGNAMOS AL PULSAR CADA BOTÓN LA ELECCIÓN CORRESPONDIENTE
    $('#piedra').click(function () {
        opcionJugador = 'piedra'
    })

    $('#papel').click(function () {
        opcionJugador = 'papel'
    })

    $('#tijera').click(function () {
        opcionJugador = 'tijera'
    })

    $('#jugar').click(function () {
        // AQUI TODO EL JUEGO
        // DEVUELVE NUMERO ENTERO ALEATORIO ENTRE MAXIMO (EXCLUIDO) Y MINIMO (INCLUIDO)
        // Math.floor(Math.random() * (max - min) + min)

        // ASIGNO A LA MAQUINA LA OPCIÓN ALEATORIA
        switch (Math.floor(Math.random() * (4 - 1) + 1)) {
            case 1:
                opcionMaquina = 'piedra'
                break;
            case 2:
                opcionMaquina = 'papel'
                break;
            case 3:
                opcionMaquina = 'tijera'
                break;
        }

        /*
        PIEDRA - TIJERA -> JUGADOR
        TIJERA - PAPEL -> JUGADOR
        PAPEL - PIEDRA -> JUGADOR
        -----
        TIJERA - PIEDRA -> MAQUINA
        PAPEL - TIJERA -> MAQUINA
        PIEDRA - PAPEL -> TIJERA
        -----
        EMPATES
        */
        //    CREO LAS POSIBLES CONDICIONES DEL JUEGO
        //    TRES OPCIONES DE VICTORIA DEL JUGADOR
        if (opcionJugador == 'piedra' && opcionMaquina == 'tijera') {
            resultado = 'PUNTO JUGADOR'
            puntosJugador++
        } else if (opcionJugador == 'tijera' && opcionMaquina == 'papel') {
            resultado = 'PUNTO JUGADOR'
            puntosJugador++
        } else if (opcionJugador == 'papel' && opcionMaquina == 'piedra') {
            resultado = 'PUNTO JUGADOR'
            puntosJugador++
            // TRES OPCIONES DE VICTORIA DE LA MÁQUINA
        } else if (opcionJugador == 'tijera' && opcionMaquina == 'piedra') {
            resultado = 'PUNTO MÁQUINA'
            puntosMaquina++
        } else if (opcionJugador == 'papel' && opcionMaquina == 'tijera') {
            resultado = 'PUNTO MÁQUINA'
            puntosMaquina++
        } else if (opcionJugador == 'piedra' && opcionMaquina == 'papel') {
            resultado = 'PUNTO MÁQUINA'
            puntosMaquina++
        } else {
            // EMPATES
            resultado = 'EMPATE'
        }

        // MOSTRAMOS EL RESULTADO EN LA PANTALLA
        $('#respuesta').append('<p>El jugador ha elegido <span>' + opcionJugador + '</span> y la máquina ha elegido <span>' + opcionMaquina + '</span>. El resultado es: <span>' + resultado + '</span></p>')

        // AÑADO CONDICIÓN PARA QUE GANE EL PRIMERO QUE LLEGUE A 5 VICTORIAS
        if (puntosJugador == 5) {
            alert('GANADOR JUGADOR')
            puntosJugador = 0
            puntosMaquina = 0
            $('#respuesta').html('')
        } else if (puntosMaquina == 5) {
            alert('GANADOR MÁQUINA')
            puntosJugador = 0
            puntosMaquina = 0
            $('#respuesta').html('')
        }
    })
})