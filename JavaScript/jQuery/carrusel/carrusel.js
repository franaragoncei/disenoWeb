$(function () {
    // VARIABLE QUE TENDRÁ EL CONTENIDO Y LA FUNCIONALIDAD DEL CARRUSEL
    var sliderModule = (function () {

        // CREAMOS EL OBJETO CARRUSEL AL QUE LE VAMOS A AÑADIR LAS 'PIEZAS' DEL MISMO
        var carruselContenedor = {}

        // ALMACENAMOS EL SLIDER EN EL OBJETO
        carruselContenedor.miCarrusel = $('#slider')

        // CREAMOS UN ARRAY (FOTOS) QUE ALMACENA LAS FOTOS DEL CARRUSEL BUSCÁNDOLOS EN EL HTML CON EL MÉTODO FIND()
        carruselContenedor.fotos = {
            arrayFotos: carruselContenedor.miCarrusel.find('.slider_wrapper>li')
        }

        // FUNCION QUE INICIALIZA EL CARRUSEL CON EL TIEMPO QUE LE OTORGUEMOS
        var sliderInit = function () {
            sliderInterval = setInterval(carruselContenedor.startCarrusel, 2000)
        }

        // CREAMOS LA FUNCION QUE EJECUTA EL CARRUSEL AUTOMATICAMENTE
        carruselContenedor.startCarrusel = function () {
            var fotos = carruselContenedor.fotos.arrayFotos
            var botones = $('#control_buttons>li')

            // CUANDO LA DIAPOSITIVA SEA LA ÚLTIMA, PASA A LA PRIMERA 
            if (nextSlider >= lengthSlider) {
                nextSlider = 0
                currentSlider = lengthSlider - 1
            }

            // ELIMINAR LA CLASE ACTIVE A TODOS LOS BOTONES
            botones.removeClass('active')
            // AÑADIMOS LA CLASE ACTIVE AL SIGUIENTE BOTON
            botones.eq(nextSlider).addClass('active')

            // AÑDIMOS EFECTOS DE FADE OUT Y FADE IN A LAS DIAPOSITIVAS
            fotos.eq(currentSlider).fadeOut()
            fotos.eq(nextSlider).fadeIn()

            // ACTUALIZAMOS EL NUMERO DEL SLIDER
            currentSlider = nextSlider
            nextSlider = nextSlider + 1 // ES LO MISMO QUE -> nextSlider += 1
        }

        // CREAMOS LAS VARIABLES NECESARIAS
        var sliderInterval
        var currentSlider = 0
        var nextSlider = 1
        var lengthSlider = carruselContenedor.fotos.arrayFotos.length

        // CREAMOS EL CONSTRUCTOR DEL CARRUSEL
        carruselContenedor.init = function () {
            console.log('Iniciando Carrusel');
            // LLAMAMOS A LA FUNCIÓN PARA INICIAR EL SLIDER
            sliderInit()

            // AÑADIMOS LA FUNCIONALIDAD PARA QUE AL HACER CLICK EN LOS BOTONES SE CAMBIE LA DIAPOSITIVA
            $('#control_buttons>li').click(function () {
                if (currentSlider != $(this).index()) {
                    cambiarFoto($(this).index())
                }
            })
            // AÑADE FUNCIONALIDAD PARA QUE AL CLICAR EN BOTON DE RETROCEDER, PASE A LA DIAPOSITIVA ANTERIOR
            $('#anterior').click(function () {
                cambiarFoto(currentSlider - 1)
            })

             // AÑADE FUNCIONALIDAD PARA QUE AL CLICAR EN BOTON DE AVANZAR, PASE A LA DIAPOSITIVA SIGUIENTE
            $('#siguiente').click(function () {
                cambiarFoto(currentSlider + 1)
            })
        }

        var cambiarFoto = function (numeroFoto) {
            // LIMPIAMOS EL INTERVALO PARA QUE SE PARE LA REPRODUCCIÓN AUTOMATICA
            // clearInterval(sliderInterval)

            // CREAMOS LAS VARIABLES
            var fotos = carruselContenedor.fotos.arrayFotos
            var botones = $('#control_buttons>li')

            // CONTROLAMOS EL BOTÓN PULSADO PARA VER CUAL ES EL SIGUIENTE
            if (numeroFoto >= lengthSlider) {
                numeroFoto = 0
            } else if (numeroFoto < 0) {
                numeroFoto = lengthSlider - 1
            }

            // ELIMINAMOS LA CLASE ACTIVE A TODOS LOS BOTONESS
            botones.removeClass('active')
            // AÑADIMOS LA CLASE ACTIVE AL BOTÓN CORRESPONDIENTE
            botones.eq(numeroFoto).addClass('active')

            // AÑDIMOS EFECTOS DE FADE OUT Y FADE IN A LAS DIAPOSITIVAS
            fotos.eq(currentSlider).fadeOut()
            fotos.eq(numeroFoto).fadeIn()

            // ACTUALIZAMOS EL NUMERO DEL SLIDER
            currentSlider = numeroFoto
            nextSlider = numeroFoto + 1 // ES LO MISMO QUE -> nextSlider += 1
        }

        // DEVOLVEMOS EL CONTENEDOR DEL CARRUSEL PARA PODER USAR LAS FUNCIONES QUE CONTIENE
        return carruselContenedor
    }()) // PONEMOS DOS PARENTESIS PARA QUE SE EJECUTE AUTOMATICAMENTE
    // INICIAMOS EL CARRUSEL AL CARGAR LA PÁGINA
    sliderModule.init()

})