var moneda1 = document.getElementById('moneda1')
var moneda2 = document.getElementById('moneda2')
var select = document.getElementById('valor')
var select2 = document.getElementById('valor2')

// HACE LA CONVERSIÓN CUANDO SE INTRODUCE ALGO EN EL PRIMER INPUT
moneda1.addEventListener('change', function () {
    fetch('https://api.frankfurter.app/latest?amount=' + moneda1.value + '&from=' + select.value + '&to=' + select2.value)
        .then(respuesta => respuesta.json())
        .then(datos => {
            moneda2.value = Object.values(datos.rates)[0]
        })
})

// LLENA LOS SELECT CON LOS DATOS DE TODAS LAS MONEDAS
fetch('https://api.frankfurter.app/currencies')
    .then(respuesta => respuesta.json())
    .then(datos => {
        console.log(Object.keys(datos));
        console.log(Object.values(datos));

        for (let i = 0; i < Object.keys(datos).length; i++) {
            select.innerHTML += (
                '<option value="' + Object.keys(datos)[i] + '">' + Object.values(datos)[i] + '</option>'
            )

            select2.innerHTML += (
                '<option value="' + Object.keys(datos)[i] + '">' + Object.values(datos)[i] + '</option>'
            )
        }
    })