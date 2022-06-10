var moneda1 = document.getElementById('moneda1')
var moneda2 = document.getElementById('moneda2')
var select = document.getElementById('valor')
var select2 = document.getElementById('valor2')

fetch('https://api.frankfurter.app/currencies')
    .then(respuesta => respuesta.json())
    .then(datos => {
        // console.log(datos);
        for (let i = 0; i < Object.values(datos).length; i++) {
            // console.log(Object.values(datos)[i]);
            select.innerHTML += '<option value="' + Object.keys(datos)[i] + '">' + Object.values(datos)[i] + '</option>'
            select2.innerHTML += '<option value="' + Object.keys(datos)[i] + '">' + Object.values(datos)[i] + '</option>'
        }
    })

moneda1.addEventListener('change', function () {
    fetch('https://api.frankfurter.app/latest?amount=' + moneda1.value + '&from=' + select.value + '&to=' + select2.value)
        .then(respuesta => respuesta.json())
        .then(datos => {
            console.log(datos);
            moneda2.value = Object.values(datos.rates)[0]
        })
})