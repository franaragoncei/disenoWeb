var moneda1 = document.getElementById('moneda1')
var moneda2 = document.getElementById('moneda2')

moneda1.addEventListener('change', function () {
    fetch('https://api.frankfurter.app/latest?amount=' + moneda1.value + '&from=EUR&to=USD')
        .then(respuesta => respuesta.json())
        .then(datos => {
            console.log(datos);
            moneda2.value = datos.rates.USD
        })
})


moneda2.addEventListener('change', function () {
    fetch('https://api.frankfurter.app/latest?amount=' + moneda2.value + '&from=USD&to=EUR')
        .then(respuesta => respuesta.json())
        .then(datos => {
            console.log(datos);
            moneda1.value = datos.rates.EUR
        })
})