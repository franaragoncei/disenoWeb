$(function () {
    $('#menuHamburguesa').click(function () {
        $('span:nth-child(1)').toggleClass('primera')
        $('span:nth-child(2)').toggleClass('segunda')
        $('span:nth-child(3)').toggleClass('tercera')

        $('#opcionesMenu').animate({
            width: 'toggle'
        }, 500)
    })
})