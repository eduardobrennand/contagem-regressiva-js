document.addEventListener('DOMContentLoaded', function() {
    var botao = document.querySelector('.desafio-button');

    var getHora = document.querySelector('.desafio-contador-horas');
    var getMinuto = document.querySelector('.desafio-contador-minutos');
    var getSegundo = document.querySelector('.desafio-contador-segundos');

    botao.addEventListener('click', converteHoras);
    

    if (localStorage.length < 0) {
        localStorage.setItem('dataInput', dataInputStorage);
    } else {
        document.querySelector('.desafio-input-date').value = localStorage.getItem('dataInput')
    }

    function converteDataUTC(date) { 
        return new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds()); 
        }

    function converteHoras(){

        var dataAtualTime = new Date().getTime();
        var dataInput = converteDataUTC(new Date(document.querySelector('.desafio-input-date').value));
        var dataInputTime = dataInput.getTime();
        var dataInputStorage = document.querySelector('.desafio-input-date').value
        var diferenca = (dataInputTime - dataAtualTime) / 1000;
       
        
        
        var horas = Math.floor(diferenca / 3600);
        var minutos = Math.floor((diferenca - horas * 3600) / 60);
        var segundos = Math.floor((diferenca - (minutos * 60) - (horas * 3600)));

        getHora.innerHTML = horas + ':';
        getMinuto.innerHTML = minutos + ':';
        getSegundo.innerHTML = segundos;   
        
        localStorage.setItem('dataInput', dataInputStorage);

        timer = setInterval(converteHoras, 1000);


    } 

    
    
    
        

    
    
})