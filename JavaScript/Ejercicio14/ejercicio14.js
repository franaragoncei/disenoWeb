var parrafo = document.getElementsByTagName('p')

console.log(parrafo);

for(let i = 0; i < parrafo.length; i++){
    parrafo[i].addEventListener('copy', function(){
        alert('Copiado correctamente')
    })
}