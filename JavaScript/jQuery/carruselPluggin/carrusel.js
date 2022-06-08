$(function () {
    // INICIAMOS EL CARRUSEL
    $('#jcarousel').jcarousel()

    // BOTÓN PARA IR A UNA DIAPOSITIVA ANTERIOR
    $('.jcarousel_control_prev').
    // CONCATENAMOS EVENTOS CON EL MÉTODO ON()
    // ELIMINAMOS LA CLASE INACTIVA CUANDO ESTÉ ACTIVO
    on('jcarouselcontrol:active', function () {
            $(this).removeClass('inactive')
        })
        // AÑADIMOS LA CLASE INACTIVO
        .on('jcarouselcontrol:inactive', function () {
            $(this).addClass('inactive')
        })
        // RETROCEDEMOS UNA DIAPOSITIVA
        .jcarouselControl({
            target: '-=1'
        })

    // BOTÓN PARA IR A DIAPOSITIVA SIGUIENTE
    $('.jcarousel_control_next').
    // CONCATENAMOS EVENTOS CON EL MÉTODO ON()
    // ELIMINAMOS LA CLASE INACTIVA CUANDO ESTÉ ACTIVO
    on('jcarouselcontrol:active', function () {
            $(this).removeClass('inactive')
        })
        // AÑADIMOS LA CLASE INACTIVO
        .on('jcarouselcontrol:inactive', function () {
            $(this).addClass('inactive')
        })
        // RETROCEDEMOS UNA DIAPOSITIVA
        .jcarouselControl({
            target: '+=1'
        })

    // PAGINACIÓN
    $('.jcarousel_pagination')
        // AÑADIMOS LA CLASE ACTIVA A LA <a></a>
        .on('jcarouselpagination:active', 'a', function () {
            $(this).addClass('active')
        })
        // ELIMINAMOS LA CLASE ACTIVA A LA <a></a>
        .on('jcarouselpagination:inactive', 'a', function () {
            $(this).removeClass('active')
        })
        // LLAMAMOS AL PLUGIN QUE SE ENCARGA DE LA PAGINACIÓN
        .jcarouselPagination()


    // AÑADIMOS QUE EMPIECE AUTOMATICAMENTE Y QUE VAYA DE 1 EN 1
    $('#jcarousel').jcarouselAutoscroll({
        interval: 3000,
        target: '+=1',
        autostart: true
    })
})