$(function(){
    $('#menuHamburguesa').click(function(){
        $('#opcionesMenu').stop()
        $('#opcionesMenu').animate({
            width: 'toggle'
        }, 500)
        $('span:nth-child(1)').toggleClass('primera')
        $('span:nth-child(2)').toggleClass('segunda')
        $('span:nth-child(3)').toggleClass('tercera')
    })
})