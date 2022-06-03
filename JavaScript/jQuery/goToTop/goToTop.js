$(function () {
    // MOSTRAMOS LA FLECHA
    $(window).scroll(function(event){
        event.preventDefault()
        console.log($(this).scrollTop());
        $('#scroll-top').stop()
        if($(this).scrollTop() > 100){
            $('#scroll-top').fadeIn('slow')
        }else{
            $('#scroll-top').fadeOut('slow')
        }
    })

    // HACEMOS EL EVENTO CLICK
    $('#scroll-top').click(function(event){
        event.preventDefault()
        $('html, body').animate({
            scrollTop: 0
        }, 1000)
    })
})