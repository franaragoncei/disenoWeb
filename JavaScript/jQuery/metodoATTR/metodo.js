$(function () {
    $('button').click(function () {
        // if ($('img').attr('src') == 'perro1.jpg') {
        //     $('img').attr('src', 'perro2.jpg')
        // } else if ($('img').attr('src') == 'perro2.jpg') {
        //     $('img').attr('src', 'perro3.webp')
        // } else {
        //     $('img').attr('src', 'perro1.jpg')
        // }

        switch ($('img').attr('src')) {
            case 'perro1.jpg':
                $('img').attr('src', 'perro2.jpg')
                break;
            case 'perro2.jpg':
                $('img').attr('src', 'perro3.webp')
                break;
            default:
                $('img').attr('src', 'perro1.jpg')
        }

        // // console.log($('img').attr('alt'));
        // $('img').attr('src', 'Perros2.webp')
        // $('img').attr('alt', 'imagen de perro 2')
        // console.log($('img').attr('alt'));
    })
})